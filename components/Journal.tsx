"use client";

import Image from "next/image";
import { useState } from "react";
import { work } from "@/lib/data";

// Quest-journal style work history: pick an entry on the left, read it on the right.
// Every panel is rendered (inactive ones hidden) so crawlers that don't run JS
// still see the full history.
export function Journal() {
  const [active, setActive] = useState(0);

  return (
    <div className="journal">
      <div className="jr-list" role="group" aria-label="Work history">
        {work.map((w, i) => {
          const current = w.time.includes("Present");
          return (
            <button
              key={w.id}
              type="button"
              aria-pressed={i === active}
              aria-controls={`jr-${w.id}`}
              className="jr-item"
              onClick={() => setActive(i)}
            >
              <span className={`jr-status${current ? " live" : ""}`}>
                {current ? "Active" : "Completed"}
              </span>
              <span className="jr-co">{w.company}</span>
              <span className="jr-role">{w.role}</span>
            </button>
          );
        })}
      </div>

      <div>
        {work.map((job, i) => (
          <article className="jr-panel" id={`jr-${job.id}`} key={job.id} hidden={i !== active}>
            <header className="jr-head">
              <div>
                <p className="kicker">{job.tab}</p>
                <h3>{job.company}</h3>
                <p className="jr-meta">
                  {job.role} <span aria-hidden="true">//</span> {job.time}
                </p>
              </div>
              <span className="jr-index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}/{String(work.length).padStart(2, "0")}
              </span>
            </header>

            <figure className="frame">
              <Image src={job.image} alt={`${job.company}: what I worked on`} placeholder="blur" sizes="(max-width: 1000px) 100vw, 820px" />
            </figure>

            <h4 className="label">Objective</h4>
            <p className="jr-desc">{job.desc}</p>

            <h4 className="label">Loadout used</h4>
            <ul className="tags">
              {job.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
