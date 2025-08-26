// server.js (ES module)
import dotenv from "dotenv";
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

dotenv.config();

const app = express();

// CORS: allow all when ALLOWED_ORIGINS not set (dev). In production set ALLOWED_ORIGINS env.
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || "").split(",").filter(Boolean);
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (ALLOWED_ORIGINS.length === 0 || ALLOWED_ORIGINS.includes(origin)) return callback(null, true);
    return callback(new Error("Not allowed by CORS"));
  }
}));
app.use(express.json());

const {
  SMTP_HOST = "smtp.gmail.com",
  SMTP_PORT = 587,
  SMTP_USER,
  SMTP_PASS,
  TO_EMAIL,
  FROM_EMAIL,
  FROM_NAME,
  PORT = 4000
} = process.env;

if (!SMTP_USER || !SMTP_PASS || !TO_EMAIL) {
  console.warn("Missing SMTP config. Check .env (SMTP_USER, SMTP_PASS, TO_EMAIL).");
}

// Use service: 'gmail' for Gmail (simpler). Nodemailer will pick sensible defaults.
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: Number(SMTP_PORT) === 465,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS
  }
});

// Verify transporter at startup — prints helpful auth/connection error right away
transporter.verify((err, success) => {
  if (err) {
    console.error("SMTP verify failed:", err && (err.message || err));
    console.error("Double-check SMTP_USER and SMTP_PASS (Gmail app password) and network connectivity.");
  } else {
    console.log("SMTP verified. Ready to send emails.");
  }
});

// Very small in-memory rate limiter
const recent = {};
function tooMany(ip) {
  const now = Date.now();
  recent[ip] = recent[ip] ? recent[ip].filter((t) => now - t < 60_000) : [];
  recent[ip].push(now);
  return recent[ip].length > 10;
}

app.post("/api/send-contact", async (req, res) => {
  try {
    const ip = req.ip || req.headers["x-forwarded-for"] || "unknown";
    if (tooMany(ip)) return res.status(429).json({ ok: false, message: "Too many requests" });

    const { name = "Anonymous", email, subject = "Portfolio Message", message } = req.body || {};
    if (!email || !message) return res.status(400).json({ ok: false, message: "Email and message are required" });

    const mailOptions = {
      from: `${FROM_NAME || "Portfolio"} <${FROM_EMAIL || SMTP_USER}>`,
      to: TO_EMAIL,
      subject: `[Portfolio Contact] ${subject}`,
      text: `From: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>From:</strong> ${name}<br/><strong>Email:</strong> ${email}</p><hr/><p>${(message||"").replace(/\n/g,'<br/>')}</p>`
    };

    // Send and capture detailed result / error
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info && (info.messageId || info.response || JSON.stringify(info)));
    return res.json({ ok: true, message: "Message sent" });
  } catch (err) {
    // Nodemailer errors often have .response, .code, and .message — surface them to logs and client
    console.error("send-contact error:", {
      message: err.message,
      code: err.code,
      response: err.response,
      stack: err.stack
    });
    // return helpful message but not secrets
    return res.status(500).json({ ok: false, message: "Server error sending email. See server logs." });
  }
});

app.listen(Number(PORT), () => console.log(`Contact API listening on http://localhost:${PORT}`));
