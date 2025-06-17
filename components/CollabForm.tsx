"use client";

import { useState } from "react";

export default function CollabForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    link: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xanjjvne", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          topic: formData.topic,
          link: formData.link,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", topic: "", link: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-gradient-to-br from-white/80 to-slate-200/60 backdrop-blur-xl p-8 rounded-2xl shadow-2xl space-y-6 border border-slate-200"
    >
      <div>
        <label className="block mb-1 font-medium text-slate-700">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-white text-slate-800 px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-indigo-400"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-slate-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-white text-slate-800 px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-indigo-400"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-slate-700">
          Topics You&apos;re Interested In
        </label>
        <input
          type="text"
          name="topic"
          placeholder="E.g., React, AI, JAMstack..."
          value={formData.topic}
          onChange={handleChange}
          className="w-full bg-white text-slate-800 px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-indigo-400"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-slate-700">
          GitHub or LinkedIn
        </label>
        <input
          type="url"
          name="link"
          value={formData.link}
          onChange={handleChange}
          className="w-full bg-white text-slate-800 px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-indigo-400"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-slate-700">Message</label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-white text-slate-800 px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-indigo-400"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-600 transition text-white font-semibold py-2 rounded-lg"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-600 text-center font-medium">
          Thanks! I&apos;ll reach out soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-center font-medium">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
