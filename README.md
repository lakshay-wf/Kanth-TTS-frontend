# Kanth TTS — frontend

Static web pages for Kanth, the multilingual (English / Hindi / Hinglish) emotional text-to-speech model. No build step.

| File | Contents |
|---|---|
| `index.html` | speech UI: voice and language dropdowns, emotion buttons that insert tags such as `[joy@2.0] `, speed, generate, play / download |
| `tracker.html` | voice tracker: voice x language grid to mark approved (saved on the backend) and rejected (this browser only) |
| `config.js` | `window.KANTH_API` = the backend's address |
| `vercel.json` | Vercel settings (clean URLs: `/tracker` works as well as `/tracker.html`) |

## Backend

The pages call the Kanth backend (FastAPI, in the main Kanth repository: `project/serve_ui.sh`, `project/api/server.py`).
It needs PyTorch and the model weights, so it runs on a machine or service of its own, not on Vercel.

Set the backend address in `config.js`:

```js
window.KANTH_API = "https://your-backend.example";   // no trailing slash; "" = the backend serves these pages itself
```

Start the backend with this site allowed, for example:

```bash
KANTH_UI_HOST=0.0.0.0 KANTH_UI_CORS_ORIGINS=https://<your-app>.vercel.app KANTH_UI_FRONTEND= ./serve_ui.sh --int8
```

The backend must be reachable over https (a page on https cannot call an http address). The voice tracker is off on a backend
that is served to a network unless it is started with `KANTH_UI_TRACKER=1`.

## Deploy on Vercel

Import this repository; Root Directory `./`, Framework Preset "Other", no build command, no output directory.

## Run locally

Put this folder at `<Kanth repo>/frontend` (that path is git-ignored there) and run `./serve_ui.sh` in the Kanth repo's
`project/` folder: the backend then serves these pages too, at http://127.0.0.1:8010 (keep `KANTH_API = ""`).
