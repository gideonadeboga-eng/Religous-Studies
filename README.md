# A Level RS Revision Tracker

A static website (HTML, CSS and JavaScript, no build step, no accounts) that:

- **Tracks revision** against your specification: rate every spec point Not started / Weak / Getting there / Secure, add notes, and see mastery by topic.
- **Generates exam-style questions** from a built-in knowledge bank (and from your own notes): recall of key knowledge, *why was this idea developed?*, key-term definitions, evaluate/discuss, compare, and *who said it?*.
- **Marks you against a checklist**: write your answer, reveal the mark scheme, tick the points you made. Your score updates your confidence rating.
- **Schedules reviews** (spaced repetition: due again after 1, 3 and 7 days as confidence rises; poor answers come back sooner).
- Shows a **dashboard**: mastery ring, streak, 14-day activity, weakest topic, optional exam countdown.

Everything is stored in your browser (`localStorage`). Use **Data → Export progress** to back up or move device.

## Put it on GitHub Pages

1. Create a new repository on GitHub (e.g. `rs-revision`). Public is fine; no personal data is in the code.
2. Upload these five files to the root of the repo: `index.html`, `styles.css`, `app.js`, `data.js`, `README.md`.
   (Add file → Upload files → Commit.)
3. Go to **Settings → Pages**. Under *Build and deployment*, set **Source: Deploy from a branch**, branch **main**, folder **/ (root)**, then Save.
4. After about a minute your site is live at `https://<your-username>.github.io/rs-revision/`.

Note: progress is saved per browser and per device. Export/import to sync between phone and laptop.

## Make it match YOUR specification

The starter bank covers Religious Language, Arguments for the Existence of God, the Problem of Evil, Religious Experience and Ethical Theories. It is board-agnostic, so check it against your exam board's specification and your teacher's notes.

- **Data → Import your specification**: paste your spec as text (`# Topic` for headings, `- Point | Thinker` for points). Each point becomes trackable, and questions use your own notes as the mark scheme.
- **+ Add spec point**: add a full knowledge card (key knowledge, why it was developed, strengths, criticisms, key terms) from the browser.
- **Edit `data.js`** to change or add built-in cards permanently. Each card is:

```js
{ id: "unique-id", topic: "Topic name", title: "Card title",
  q: "short phrase used in questions", thinker: "Name(s)",
  summary: ["key knowledge point", ...],
  why: ["why it was developed", ...],
  terms: [{ t: "term", d: "definition" }],
  strengths: ["..."], weaknesses: ["..."] }
```

## Getting the most from it

Write a real answer before revealing the mark scheme. Mark strictly (only tick what is actually on the page). Treat "Secure" as "could write it from memory under timed conditions". Do a short session daily rather than a long one weekly.
