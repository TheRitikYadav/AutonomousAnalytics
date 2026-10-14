# AutonomousAnalytics

A prototype dashboard for viewing n8n workflow activity and monitoring automation systems.

![AutonomousAnalytics logo](logo.png)

## Status: incomplete source snapshot

**This repository currently does not include all assets needed to run its frontend.** The checked-in `index.html` references assets such as `css/styles.css` and `js/n8n-api.js`, but these files/directories are missing from the current default branch. Restore those assets before treating the dashboard as a runnable demo.

## Present in this repository

- `index.html` — dashboard interface and page structure
- `server.js` — Node.js HTTP server and proxy for `/api/v1/*` requests to an n8n instance
- `logo.png`, `favicon.png`, `profile.png` — interface assets

The design includes sections for workflow monitoring, alerts and analytics. **The current source snapshot does not establish that these features work end-to-end.**

## Local server

A Node.js runtime is required; `server.js` uses built-in Node.js modules.

```bash
git clone https://github.com/TheRitikYadav/AutonomousAnalytics.git
cd AutonomousAnalytics
node server.js
```

The server listens on **http://localhost:3456**. The frontend will not be fully styled or functional until the missing files are restored.

### n8n configuration

The current proxy target is configured using the `N8N_BASE` constant in `server.js`. It is **not** read from a `.env` file by the checked-in server. Update the application configuration for your own environment and keep all API credentials out of Git history.

## Before deployment

- [ ] Restore the missing CSS and JavaScript assets.
- [ ] Check n8n integration and authentication end-to-end.
- [ ] Review proxy authorization, request forwarding, CORS and access controls.
- [ ] Add real screenshots and repeatable setup instructions.
- [ ] Test the dashboard with a demo n8n environment.

This README documents the checked-in code rather than claiming completed features or production readiness.
