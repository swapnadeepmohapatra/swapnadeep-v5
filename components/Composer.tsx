"use client";

import { useState } from "react";
import { EMAIL } from "@/lib/data";
import { CopyEmail } from "./CopyEmail";

const TOPICS = ["Project", "Collaboration", "Just saying hi"];

// No backend: "Send" opens the visitor's mail client with the note prefilled.
export function Composer() {
  const [topic, setTopic] = useState(TOPICS[0]);
  const [note, setNote] = useState("");
  const [hint, setHint] = useState("");

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const body = note.trim();
    if (!body) {
      setHint("Write a message first, then send it.");
      return;
    }
    const subject = encodeURIComponent(`[${topic}] Hello from swapnadeep.com`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="term" onSubmit={send}>
      <div className="term-bar">
        <span>New message</span>
        <span className="term-to">to: {EMAIL}</span>
      </div>

      <fieldset className="topics">
        <legend className="label">Topic</legend>
        {TOPICS.map((t) => (
          <label key={t} className="topic">
            <input type="radio" name="topic" value={t} checked={topic === t} onChange={() => setTopic(t)} />
            <span>{t}</span>
          </label>
        ))}
      </fieldset>

      <label className="label" htmlFor="note">
        Message
      </label>
      <textarea
        id="note"
        placeholder="> Hey Swapnadeep, I'm working on…"
        value={note}
        onChange={(e) => {
          setNote(e.target.value);
          if (e.target.value.trim()) setHint("");
        }}
      />
      <p className="hint" aria-live="polite">
        {hint}
      </p>

      <div className="term-actions">
        <CopyEmail className="btn btn-ghost" label="Copy email" />
        <button className="btn btn-primary" type="submit">
          Send message
        </button>
      </div>
    </form>
  );
}
