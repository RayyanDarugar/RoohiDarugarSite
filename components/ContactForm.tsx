"use client";

import { useState } from "react";
import { site } from "@/content/site";

// No backend yet: submitting opens the visitor's email app with the message pre-filled.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="thanks" role="status">
        <p>Your email app should open with your message ready to send.</p>
        <p style={{ marginTop: 8 }}>
          If it didn&apos;t, email <a href={`mailto:${site.email}`}>{site.email}</a> directly.{" "}
          <button type="button" className="textbtn" onClick={() => setSent(false)}>Edit message</button>
        </p>
      </div>
    );
  }

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        const topic = String(f.get("topic") || "a consultation");
        const body = [`Name: ${f.get("name")}`, `Email: ${f.get("email")}`, `Phone: ${f.get("phone") || "-"}`, `Interested in: ${topic}`, "", String(f.get("message") || "")].join("\n");
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Website inquiry: ${topic}`)}&body=${encodeURIComponent(body)}`;
        setSent(true);
      }}
    >
      <div className="two">
        <label>Name<input name="name" required autoComplete="name" /></label>
        <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      </div>
      <div className="two">
        <label>Phone <span className="opt">(optional)</span><input name="phone" type="tel" autoComplete="tel" /></label>
        <label>
          I&apos;m interested in
          <select name="topic" defaultValue="">
            <option value="" disabled>Choose one</option>
            <option>Financial planning</option>
            <option>Wealth management</option>
            <option>Retirement planning</option>
            <option>Something else</option>
          </select>
        </label>
      </div>
      <label>Message<textarea name="message" placeholder="A little about what you're hoping to work on" /></label>
      <p className="note">Please don&apos;t include account numbers or other sensitive information.</p>
      <button className="btn" type="submit">Send message</button>
    </form>
  );
}
