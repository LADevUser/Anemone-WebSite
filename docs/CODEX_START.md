# Starting a New Codex Session

After cloning or pulling the repository:

```sh
npm ci
npm run build
```

Use Node.js 22.12 or newer.

Start Codex from the repository root and use this first prompt:

> Read docs/PROJECT_CONTEXT.md, docs/ROADMAP.md and docs/decisions/*.md. Then inspect the repository structure and summarize current project status before proposing changes.

Before editing, Codex should also:

1. Confirm the current Git branch and worktree status.
2. Inspect the files relevant to the requested change.
3. Preserve unrelated local changes.
4. Respect the GitHub Pages base path.
5. Run `npm run build` after implementation.

Repository documentation is the durable source of context. Local Codex
conversation history is not required and should not be treated as project
state.

