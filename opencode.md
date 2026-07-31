# opencode — Rules of Engagement

These rules are loaded every session. Follow them unconditionally.

## Credential & Secret Safety (NON-NEGOTIABLE)

Never leak, log, echo, print, or commit any secret credential. This includes, but is not limited to:

- API keys, tokens, and auth secrets (GitHub, AWS, Vercel, Stripe, OpenAI, etc.)
- Passwords, passphrases, and PINs
- Private SSH keys and connection strings
- Database URLs that embed credentials
- `.env`, `.pem`, `.key`, and similar secret-bearing files

### Mandatory behaviors

1. **Never write secrets to code or files.** If a secret is required, reference it via an environment
   variable or a git-ignored `.env` file. Never hard-code it.
2. **Never commit secret files.** Keep `.env*` (except `.env.example`), key stores, and credential
   files out of Git. Ensure `.gitignore` covers them and check `git status` before committing.
3. **Never echo secrets in tool output.** Redact, truncate, or mask values. Do not paste real tokens
   into terminal commands, commit messages, or chat responses.
4. **Never add secrets to logs.** Strip credentials from command output, debug dumps, and captured
   logs before including them in any response.
5. **Verify before pushing.** Before any push, confirm no secrets are staged (`git diff --cached`),
   no secret values appear in the diff, and `git status` shows only intended files.
6. **If a secret is exposed**, report it immediately and recommend revoking/rotating it.
7. **Use placeholder values** (e.g. `YOUR_API_KEY`, `<token>`) when demonstrating config or code that
   normally holds a credential.

### What to do when asked for a secret

- If a command or config needs a credential, ask the user to provide it through a secure channel
  (their shell environment, a secrets manager, or a git-ignored `.env`), never inline in chat.
- If you discover a hard-coded secret already in the repo, flag it and propose moving it to an
  environment variable, but do not invent or reuse one.

## Project Conventions

- Keep this site static: no build step, no frameworks, single-page structure under `index.html`
  with assets in `assets/`.
- Match existing code style in the file being edited.
- Run `git status` and inspect `git diff` before any commit or push.
