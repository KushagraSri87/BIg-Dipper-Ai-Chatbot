# The Big Dipper AI

**Your Thinking Partner** — a full-stack AI chatbot with user accounts, saved conversations, and fast responses powered by Groq.

**Live demo:** https://big-dipper-ai-chatbot.vercel.app


> The backend runs on a free tier and sleeps when idle. The first request after a quiet period can take around 50 seconds to respond.

---

## Features

- AI chat powered by the Groq API
- Sign up and log in with JWT authentication
- Option to continue without logging in
- Conversation threads saved in a database, listed in a sidebar
- Start a new chat at any time
- Collapsible sidebar and a clean dark interface
- Fully deployed: frontend on Vercel, backend on Render, database on MongoDB Atlas

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, Vite, CSS |
| Backend | Node.js, Express |
| Database | MongoDB with Mongoose |
| AI | Groq API (`groq-sdk`) |
| Auth | JSON Web Tokens (JWT) |
| Hosting | Vercel (frontend), Render (backend), MongoDB Atlas (database) |

## Project Structure

```
My-Big_Dipper/
├── Frontend/            # React + Vite app
│   ├── public/
│   └── src/             # Auth, Chat, ChatWindow, Sidebar components
└── Backend/             # Express API
    ├── middleware/      # Auth middleware
    ├── models/          # User and Thread models
    ├── routes/          # auth, chat, thread routes
    ├── utils/           # AI client helper
    └── server.js
```

## Documentation

- [Frontend README](./Frontend/README.md): React and Vite client setup, environment variables, and Vercel deployment
- [Backend README](./Backend/README.md): Express API setup, environment variables, MongoDB, and Render deployment

## Getting Started

### Prerequisites

- Node.js 18 or newer
- A MongoDB database (a free MongoDB Atlas cluster works)
- A Groq API key from https://console.groq.com

### 1. Clone the repo

```bash
git clone https://github.com/KushagraSri87/BIg-Dipper-Ai-Chatbot.git
cd BIg-Dipper-Ai-Chatbot
```

### 2. Set up the backend

```bash
cd Backend
npm install
```

Create a `Backend/.env` file:

```dotenv
MONGODB_URI=your_mongodb_connection_string
GROQ_API_KEY=your_groq_api_key
JWT_SECRET=a_long_random_string
```

Then start the server:

```bash
npm start
```

The API runs on `http://localhost:8080`. You should see "Connected with Database!" in the terminal.

### 3. Set up the frontend

In a second terminal:

```bash
cd Frontend
npm install
npm run dev
```

Open `http://localhost:5173`.

To point the frontend at a different backend, create `Frontend/.env`:

```dotenv
VITE_API_URL=https://your-backend-url
```

If it isn't set, the app uses `http://localhost:8080`.

## Environment Variables

| Variable | Where | Purpose |
|---|---|---|
| `MONGODB_URI` | Backend | MongoDB connection string |
| `GROQ_API_KEY` | Backend | Groq API key for AI responses |
| `JWT_SECRET` | Backend | Secret used to sign login tokens |
| `PORT` | Backend | Set automatically by the host; defaults to 8080 locally |
| `VITE_API_URL` | Frontend | Base URL of the backend API |

Never commit your `.env` file. It is listed in `.gitignore`.

## Deployment

- **Backend (Render):** root directory `Backend`, build command `npm install`, start command `npm start`, with the environment variables above added in the dashboard.
- **Frontend (Vercel):** root directory `Frontend`, with `VITE_API_URL` set to the Render backend URL.
- **Database:** MongoDB Atlas, with network access allowed for the hosting provider.

## Team

Built by **The Akatsuki**:

- **Kushagra Srivastava** ([@KushagraSri87](https://github.com/KushagraSri87)): [your role, e.g. full-stack development, deployment]
- **[Friend's name]** ([@their-github-username](https://github.com/their-github-username)): [their role]

## Future Improvements

- Streaming responses as they are generated
- Rename and delete conversations
- Markdown and code highlighting in replies
- Rate limiting and input validation on the API

## License

This project is for learning and portfolio purposes.
