import React, { useState } from "react";
import {
  Send,
  Mail,
  User,
  MessageSquare,
  AlertCircle,
  CheckCircle,
  Loader2,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Clock,
  Globe,
} from "lucide-react";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";
const NAVBAR_HEIGHT = 70;

const Contact = ({ darkMode }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    msg: null,
    error: false,
  });

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const sendMailFallback = () => {
    const mailto = `mailto:kevinbalocos@gmail.com?subject=${encodeURIComponent(
      form.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailto;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.message) {
      setStatus({
        loading: false,
        msg: "Please provide an email and message.",
        error: true,
      });
      return;
    }
    setStatus({ loading: true, msg: null, error: false });

    try {
      const resp = await fetch(`${API_BASE}/api/send-contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const body = await resp.json().catch(() => ({}));
      if (!resp.ok) throw new Error(body?.message || "Failed to send");

      setStatus({
        loading: false,
        msg: body?.message || "Message sent!",
        error: false,
      });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        msg: "Could not send. Opening mail client...",
        error: true,
      });
      setTimeout(sendMailFallback, 1000);
    }
  };

  const inputBaseClasses = `
    w-full px-4 py-3 rounded-xl border transition-all duration-200 
    placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/50
    ${
      darkMode
        ? "bg-gray-800/80 border-gray-700 text-white placeholder:text-gray-400 hover:border-gray-600"
        : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-500 hover:border-gray-300"
    }
  `;

  return (
    <div
      className="flex flex-col"
      style={{ minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)` }}
    >
      {/* Main Contact Content */}
      <div
        className={`flex-1 p-6 sm:p-10 overflow-y-auto relative ${
          darkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        {/* Subtle background accent */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_top_left,teal,transparent_60%)] pointer-events-none" />

        {/* Title */}
        <div className="text-center mb-12 relative">
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Get in Touch
          </h2>
          <p
            className={`mt-3 text-base max-w-xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Have a project in mind, collaboration opportunity, or just want to
            connect? Drop me a message below or reach me through my socials.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
          {/* Contact Info (Left Column) */}
          <div
            className={`rounded-2xl p-8 flex flex-col gap-6 shadow-lg ${
              darkMode ? "bg-gray-800/80" : "bg-white"
            }`}
          >
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Mail className="w-5 h-5 text-teal-500" /> Contact Information
            </h3>

            <p
              className={`text-sm leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I’m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-teal-500" />
              <a href="mailto:kevinbalocos@gmail.com">kevinbalocos@gmail.com</a>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <MapPin className="w-4 h-4 text-teal-500" />
              <span>Laguna, Philippines</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Clock className="w-4 h-4 text-teal-500" />
              <span>Available: Mon - Sat, 9:00 AM - 5:00 PM</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Globe className="w-4 h-4 text-teal-500" />
              <span>www.kevinbalocos.dev</span>
            </div>

            {/* Socials */}
            <div className="flex gap-5 pt-4">
              <a href="#" className="hover:text-teal-500 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-teal-500 transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Form (Right Column) */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={inputBaseClasses}
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  className={inputBaseClasses}
                  required
                />
              </div>

              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className={inputBaseClasses}
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                placeholder="Your Message *"
                className={`${inputBaseClasses} resize-none`}
                required
              />

              {status.msg && (
                <div
                  className={`p-3 rounded-lg text-sm flex items-center gap-2 ${
                    status.error
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {status.error ? (
                    <AlertCircle className="w-4 h-4" />
                  ) : (
                    <CheckCircle className="w-4 h-4" />
                  )}
                  {status.msg}
                </div>
              )}

              <button
                type="submit"
                disabled={status.loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold
                bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg hover:shadow-xl
                hover:from-teal-700 hover:to-teal-800 transition-all"
              >
                {status.loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div
        className={`p-5 text-center text-sm ${
          darkMode ? "bg-gray-800 text-gray-400" : "bg-gray-200 text-gray-600"
        }`}
      >
        © {new Date().getFullYear()} Developed by JEYDEV.
      </div>
    </div>
  );
};

export default Contact;
