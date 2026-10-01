# Prompt: Install Graphify + OpenSpec in EventsHub with Codex

Copy everything below the line into a fresh AI agent session (or follow it
yourself step by step). It is self-contained — the agent doesn't need any
other context from this repo's history.

---

You are working in the `EventsHub` repository (repo root =
`D:\Universidad\Semestre 9\ActividadesServiciosWeb\EventsHub`, a Windows machine, PowerShell as the primary
shell). It's a two-app repo: a .NET 10 backend under `src/`/`tests/`, and a
React + TypeScript + Vite frontend under `web/`. Your task is to install two
developer-tooling packages into this repo and verify both work:

1. **Graphify** ([Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify),
   PyPI package `graphifyy`) — turns the codebase into a queryable knowledge
   graph, exposed as a `$graphify` skill for Codex (also supports other AI
   coding assistants).
2. **OpenSpec** ([Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec),
   npm package `@fission-ai/openspec`) — a spec-driven development workflow:
   change proposals → specs → implementation, as plain Markdown under
   `openspec/`.

Neither tool is a project dependency (nothing goes in `.csproj` or
`package.json`) — both are installed as global CLIs on the developer machine
and then initialized once per repo, writing their own config/output
directories into the repo.

## Step 1 — Install Graphify

Prerequisites: Python 3.10+ and `uv` (or `pipx`).

```powershell
# Prereqs, if not already present
winget install astral-sh.uv
python --version   # confirm 3.10+

# Install (isolated environment, recommended)
uv tool install graphifyy
# Alternative if uv isn't available: pipx install graphifyy
```

Confirm the CLI is on PATH:

```powershell
graphify --version
```

### Register the Codex skill

If `graphify --version` already works, continue here; do not reinstall it.
No Claude Code installation or account is required. Run in PowerShell from
the repository root:

```powershell
graphify install --project --platform codex
```

This installs the project skill under `.agents/skills/graphify/` (including
its reference files). Preserve the existing repository instructions in
`AGENTS.md`; review any additions made by the installer. Restart your Codex
session in this repository to discover the new skill. In Codex, invoke it
as `$graphify`, not `/graphify`. This integration uses local skills and the
CLI; no MCP server registration is needed.

### Resume here (PowerShell versus Codex)

- PowerShell: run the installation, extraction, and verification commands
  in this guide.
- Codex chat: invoke `$graphify .` after restarting the session. Do not paste
  that expression into PowerShell, where `$graphify` means a shell variable.
- For a first graph without an API key or assistant orchestration, use the
  code-only CLI command below. It covers code; semantic document extraction
  is a separate workflow and may need a configured LLM backend.

### Exclude noisy paths before the first build

Create `.graphifyignore` at the repo root (same syntax as `.gitignore`) so
the graph isn't polluted by build output, dependencies, and generated code:

```
web/node_modules/
web/dist/
**/bin/
**/obj/
src/EventsHub.OpenApi/Generated/
src/openapi/
```

(`src/EventsHub.OpenApi/Generated/` and `src/openapi/` are NSwag-generated —
see `docs/Architecture.md` — not worth graphing as "real" code.)

### Build the graph

For an initial local code graph, run in PowerShell:

```powershell
graphify extract . --code-only
```

Alternatively, ask Codex to use the installed skill in a new chat:

```text
$graphify .
```

The CLI form above explicitly skips semantic extraction of documents and
requires no API key. Do not assume a Codex login configures an OpenAI API
backend for Graphify. Use `graphify --help` for the installed version's
supported extraction options.

This produces `graphify-out/` containing `graph.html` (interactive viewer),
`GRAPH_REPORT.md` (summary + suggested questions), and `graph.json`
(queryable structure). Per Graphify's own guidance, commit `graphify-out/`
to git, but exclude `graphify-out/cost.json` (and any cache subfolder it
creates) via `.gitignore`.

### Verify

- `graphify-out/graph.html` opens in a browser and shows a non-empty graph
  covering both `src/` (C#) and `web/src` (TypeScript/React) — Graphify
  supports both languages via tree-sitter, so a correct install should graph
  the whole repo, not just one side.
- `GRAPH_REPORT.md` mentions real entities from this repo (e.g.
  `EventsController`, `AppDbContext`, `Event`), not a placeholder/empty
  report.

### Keep the graph fresh — auto-rebuild on every commit

By default the graph only updates when someone runs `$graphify .` (or
`graphify update .`) by hand. To rebuild it automatically, install Graphify's own
git hooks from the repo root:

```powershell
graphify hook install
```

This writes `post-commit` and `post-checkout` hooks (platform-agnostic
shell scripts) into `.git/hooks/`. From then on, every commit diffs against
`HEAD~1`, and if any graphed file changed, `graph.json` and
`GRAPH_REPORT.md` are refreshed after the commit — deterministic AST
parsing, no LLM call, effectively free for code-only commits. Generated updates are not automatically included in the commit that already
finished; review `git status` before committing them. Switching
branches (`post-checkout`) triggers the same rebuild so the graph matches
whatever's checked out. The hook is designed to never fail your commit: if
the rebuild errors, it exits `0` and the commit still goes through.

Useful companions:

```powershell
graphify hook status      # confirm the hooks are installed and active
graphify hook uninstall   # remove them again
```

Since `.git/hooks/` isn't tracked by git, **every contributor who wants the
auto-rebuild needs to run `graphify hook install` once themselves** after
cloning — it's not something that comes along automatically when they pull
`graphify-out/` or `.graphifyignore` from the repo.

## Step 2 — Install OpenSpec

Prerequisite: Node.js 20.19.0+.

```powershell
node --version   # confirm >= 20.19.0
npm install -g @fission-ai/openspec@latest
openspec --version
```

### Initialize in this repo

From the repo root:

```powershell
openspec init --tools codex
```

This initializes `openspec/` for specs and changes, and installs Codex skills.
Current upstream versions use `.agents/skills/openspec-*/SKILL.md`; older
versions may use `.codex/skills/` and custom prompts. Follow the installed
CLI's "Getting started" output if its generated layout differs.

Current Codex integration uses skills rather than Claude's `/opsx:*`
commands. In a new Codex chat, for example:

```text
$openspec-propose add-event-search
$openspec-apply-change
$openspec-archive-change
```

These are workflow examples, not installation checks: propose a real change
only when you intend to start work on it. Skill availability depends on the
selected OpenSpec profile. Use `openspec init --help` for supported options.

### Verify

```powershell
openspec list
openspec validate --all
Get-ChildItem .agents/skills -Directory
```

A fresh initialization can have no changes or specs to validate; an empty
result does not prove that a real specification has passed validation.
Restart Codex and confirm the generated OpenSpec skills are available.

## Step 3 — Report back

Once both are installed, summarize:
- Graphify and OpenSpec CLI versions (`graphify --version`, `openspec --version`)
- Whether `graphify-out/graph.html` renders a real graph of this repo
- Whether `graphify hook status` shows the post-commit/post-checkout hooks installed
- Whether `openspec list` / `openspec validate --all` run cleanly
- Any files git now shows as new/untracked (`git status`) so the user can
  review before committing — do not commit anything yourself.

---

## Notes for whoever runs this (not part of the agent prompt)

- Both tools are installed **globally** on the machine running them — every
  contributor who wants to use `$graphify` or the OpenSpec workflow needs to
  run Step 1/Step 2's install commands themselves once. Only the
  *initialized, repo-scoped* output (`graphify-out/`, `.graphifyignore`,
  `openspec/`, `.agents/skills/...`) is meant to be committed.
- `graphify hook install` writes to `.git/hooks/`, which git never tracks —
  so the auto-rebuild-on-commit behavior is also per-machine. Each
  contributor who wants commits/checkouts to auto-refresh the graph needs to
  run `graphify hook install` themselves; there's no way to ship that setup
  via a committed file the way `.graphifyignore` can be.
- Neither tool touches `EventsHub.slnx`, any `.csproj`, or `web/package.json`
  — if a future agent run proposes editing those to "add" Graphify/OpenSpec,
  that's a sign it misunderstood the install model above.
- `openspec update` regenerates the tool-specific config files after an
  OpenSpec version bump; re-run it after upgrading the CLI.

## Sources for the Codex adaptation

- [Graphify installation and Codex integration](https://github.com/Graphify-Labs/graphify#installation)
- [OpenSpec supported tools and Codex skill names](https://github.com/Fission-AI/OpenSpec/blob/main/docs/supported-tools.md)
- [Official OpenAI skill documentation](https://developers.openai.com/codex/skills)

Local check during this adaptation: `graphify --version` returned `0.9.71`;
`graphify install --help` listed `codex`. OpenSpec was not found on this
session's PATH. Editing this guide does not install or initialize either tool.
