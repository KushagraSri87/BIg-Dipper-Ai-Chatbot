# The Big Dipper AI — Frontend

The web client for **The Big Dipper AI**, a chatbot with user accounts and saved conversations.

**Live site:** https://big-dipper-ai-chatbot.vercel.app

## Tech Stack

- React
- Vite
- CSS (component-level stylesheets)
- React Context for shared app state

## Features

- Log in and sign up screen, with a "Continue without login" option
- Chat window with AI replies
- Sidebar listing previous conversations, with a button to start a new chat
- Collapsible sidebar
- Dark interface

## Folder Structure

```
Frontend/
├── public/              # Static files
├── src/
│   ├── assets/          # Images and logos
│   ├── App.jsx          # Root component
│   ├── Auth.jsx         # Login and signup
│   ├── Chat.jsx         # Chat input and message handling
│   ├── ChatWindow.jsx   # Main chat area
│   ├── Sidebar.jsx      # Conversation list and navigation
│   ├── MyContext.jsx    # Shared state (React Context)
│   └── main.jsx         # App entry point
├── index.html
├── vite.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- The backend running locally or deployed (see the Backend README)

### Install and run

```bash
cd Frontend
npm install
npm run dev
```

The app opens at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

The output is created in the `dist` folder.

## Environment Variables

Create a `Frontend/.env` file only if you want to use a backend other than the local one:

```dotenv
VITE_API_URL=https://your-backend-url
```

- Do not put a slash at the end of the URL.
- If `VITE_API_URL` is not set, the app uses `http://localhost:8080`.
- Vite only exposes variables that start with `VITE_`. After changing one, restart the dev server.

## Deployment (Vercel)

1. Import the repository in Vercel.
2. Set **Root Directory** to `Frontend`.
3. Keep the Vite defaults (build command `npm run build`, output directory `dist`).
4. Add `VITE_API_URL` pointing to your deployed backend.
5. Deploy.

Redeploy after changing environment variables, since they are applied at build time.

## Troubleshooting

- **Requests go to `localhost:8080` on the live site:** `VITE_API_URL` was not set at build time. Add it in Vercel and redeploy.
- **Chat does not respond on the first try:** the free backend may be waking up. Wait about a minute and try again.
- **Browser console shows a CORS or network error:** check that the backend is running and that the URL in `VITE_API_URL` is correct.