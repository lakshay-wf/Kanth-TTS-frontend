// Kanth frontend settings. KANTH_API = the backend's address (project/serve_ui.sh), without a trailing slash.
//   ""                               the backend serves this page itself (local: http://127.0.0.1:8010)
//   "https://your-backend.example"   the page is hosted elsewhere (e.g. Vercel); that backend must list this page's
//                                    origin in KANTH_UI_CORS_ORIGINS and be served over https
window.KANTH_API = "";
