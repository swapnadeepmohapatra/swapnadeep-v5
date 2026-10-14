import { bio, DESCRIPTION, expertise, handles, NAME, RESUME_URL, SITE_URL, toolkit, work } from "@/lib/data";

export const dynamic = "force-static";

// Plain-markdown summary for LLMs (https://llmstxt.org), built from the same data as the page.
export function GET() {
  const body = [
    `# ${NAME}`,
    `> ${DESCRIPTION}`,
    bio,
    "## Experience",
    ...work.map((w) => `### ${w.role}, ${w.company} (${w.time})\n${w.desc}\nStack: ${w.stack.join(", ")}`),
    "## Expertise",
    ...expertise.map((e) => `- **${e.area}** (${e.tag}): ${e.note}`),
    "## Toolkit",
    ...toolkit.map((t) => `- ${t.label}: ${t.items.join(", ")}`),
    "## Links",
    `- [Website](${SITE_URL})`,
    `- [Resume (PDF)](${SITE_URL}${RESUME_URL})`,
    ...handles.map((h) => `- [${h.label}](${h.href})`),
  ].join("\n\n");

  return new Response(body + "\n", { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
