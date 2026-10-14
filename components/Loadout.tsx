"use client";

import { useState } from "react";
import { toolkit } from "@/lib/data";

const ALL = "All";

// Filterable inventory of tools, grouped by category.
export function Loadout() {
  const [filter, setFilter] = useState(ALL);
  const rows = filter === ALL ? toolkit : toolkit.filter((r) => r.label === filter);
  const total = rows.reduce((n, r) => n + r.items.length, 0);

  return (
    <div className="loadout">
      <div className="lo-filters" role="group" aria-label="Filter by category">
        {[ALL, ...toolkit.map((r) => r.label)].map((label) => (
          <button
            key={label}
            type="button"
            className="lo-filter"
            aria-pressed={filter === label}
            onClick={() => setFilter(label)}
          >
            {label}
          </button>
        ))}
        <span className="lo-count" aria-live="polite">
          {total} items
        </span>
      </div>

      <ul className="lo-grid">
        {rows.flatMap((r) =>
          r.items.map((item) => (
            <li key={item} className={`lo-item k-${r.kind}`}>
              <span className="lo-cat">{r.label}</span>
              <span className="lo-name">{item}</span>
            </li>
          )),
        )}
      </ul>
    </div>
  );
}
