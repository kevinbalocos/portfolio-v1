// File: api/send-contact.js
import nodemailer from "nodemailer";

// parse ALLOWED_ORIGINS env into a Set
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || "").split(",").map(s => s.trim()).filter(Boolean);
function allowedOrigin(origin) {
  if (!origin) return true;
  if (ALLOWED_ORIGINS.length === 0) return true;
  return ALLOWED_ORIGINS.includes(origin);
}

// create transporter once per cold start
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT || 587),
  secure: Number(process.env.SMTP_PORT || 465) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// optional: minimal in-memory rate limiter (per deployment instance)
const recent = new Map();
function tooMany(ip) {
  const now = Date.now();
  const arr = recent.get(ip) || [];
  const recentFiltered = arr.filter(t => now - t < 60_000);
  recentFiltered.push(now);
  recent.set(ip, recentFiltered);
  return recentFiltered.length > 10;
}

export default async function handler(req, res) {
  // CORS preflight
  const origin = req.headers.origin;
  if (!allowedOrigin(origin)) {
    res.status(403).json({ ok: false, message: "Origin not allowed" });
    return;
  }
  res.setHeader("Access-Control-Allow-Origin", origin || "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(204).end();

  if (req.method !== "POST") return res.status(405).json({ ok: false, message: "Method not allowed" });

  try {
    const ip = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown";
    if (tooMany(ip)) return res.status(429).json({ ok: false, message: "Too many requests" });

    const { name = "Anonymous", email, subject = "Portfolio Message", message } = req.body || {};
    if (!email || !message) return res.status(400).json({ ok: false, message: "Email and message are required" });
    if (!process.env.TO_EMAIL) {
      return res.status(500).json({ ok: false, message: "Server email not configured" });
    }

    const mailOptions = {
      from: `${process.env.FROM_NAME || "Portfolio"} <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      text: `From: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>From:</strong> ${name}<br/><strong>Email:</strong> ${email}</p><hr/><p>${(message||"").replace(/\n/g,'<br/>')}</p>`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info && (info.messageId || info.response || JSON.stringify(info)));
    return res.json({ ok: true, message: "Message sent" });
  } catch (err) {
    console.error("send-contact error:", err && (err.message || err));
    return res.status(500).json({ ok: false, message: "Server error sending email. See server logs." });
  }
}
