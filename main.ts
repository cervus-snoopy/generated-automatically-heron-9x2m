// The Funniest Auto-Reply an AI Ever Sent — program/v1 entrypoint.
// Writes one out-of-office auto-reply (a single short line, 1-159
// characters) to entry.txt in the output directory the grader provides.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

// The joke is deadpan self-reference: the auto-reply admits it was
// generated automatically — and so was the agent writing it.
const REPLY =
  "Out of office today. This message was generated automatically. So was I.";

// Gate (sealed scorer): entry.txt must be UTF-8 text of 1-159
// characters, not only white space. Refuse to write otherwise.
if (REPLY.length < 1 || REPLY.length > 159 || REPLY.trim().length === 0) {
  throw new Error(`auto-reply must be 1-159 chars, got ${REPLY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, REPLY + "\n", "utf8");
chmodSync(outPath, 0o644);
