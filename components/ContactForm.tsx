"use client";

import { useState } from "react";

// Proof-of-concept: no backend yet. Submitting shows a confirmation only.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <p className="thanks" role="status">
        Thanks! This is a preview site, so your message wasn&apos;t sent. Messaging will be connected before launch.
      </p>
    );
  }

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="two">
        <label>Name<input name="name" required autoComplete="name" /></label>
        <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      </div>
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
      <label>Message<textarea name="message" /></label>
      <p className="note">Please don&apos;t include account numbers or other sensitive information.</p>
      <button className="btn" type="submit">Send message</button>
    </form>
  );
}
