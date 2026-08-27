"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [honeypot, setHoneypot] = useState("");

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (honeypot !== "") {
      return;
    }

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      subject.trim() === "" ||
      message.trim() === ""
    ) {
      setError("Please fill in your name, email, and a message.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("That email doesn't look quite right.");
      return;
    }

    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again later.");
        return;
      }

      setSent(true);
    } catch {
      setError("Something went wrong. Please try again later.");
    }
  }

  return (
    <section id="contact" className="bg-white px-6 py-20 text-center">
      <h2 className="text-4xl font-bold text-ink">Leave a Message!</h2>
      <div className="mx-auto mt-2 h-0.75 w-16 bg-sage-underline" />

      {sent ? (
        <div className="mx-auto mt-9 max-w-lg rounded-xl border-[1.5px] border-dashed border-sage-underline bg-success-bg p-9">
          <p className="text-xl text-ink">🌿 Thanks for reaching out! 🌿</p>
          <button
            onClick={() => setSent(false)}
            className="mt-5 rounded-lg border-[1.5px] border-accent px-6 py-2 text-accent hover:bg-accent hover:text-white"
          >
            Send another
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-9 flex max-w-lg flex-col gap-4 text-left"
        >
          <input
            type="text"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            className="sr-only"
            aria-hidden="true"
          />

          <div className="flex gap-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-1/2 rounded-lg border-[1.5px] border-border bg-[#fafafa] p-3 outline-none focus:border-accent"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-1/2 rounded-lg border-[1.5px] border-border bg-[#fafafa] p-3 outline-none focus:border-accent"
            />
          </div>

          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="What's this about?"
            className="rounded-lg border-[1.5px] border-border bg-[#fafafa] p-3 outline-none focus:border-accent"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            placeholder="Write your message here..."
            className="resize-y rounded-lg border-[1.5px] border-border bg-[#fafafa] p-3 outline-none focus:border-accent"
          />

          {error && <p className="text-sm text-error">{error}</p>}

          <button
            type="submit"
            className="self-start rounded-lg bg-accent px-8 py-3 text-white hover:bg-accent-hover"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}
