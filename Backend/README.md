# The Big Dipper AI — Backend

The REST API behind **The Big Dipper AI**. It handles user authentication, stores conversation threads in MongoDB, and generates replies with the Groq API.

**Live API:** https://big-dipper-ai-chatbot.onrender.com

> The service runs on a free tier and sleeps when idle. The first request after a quiet period can take around 50 seconds.

## Tech Stack

- Node.js and Express
- MongoDB with Mongoose
- Groq API (`groq-sdk`) for AI responses
- JSON Web Tokens (JWT) for authentication
- `dotenv` for configuration, `cors` for cross-origin requests

## Folder Structure

```
Backend/
├── middleware/
│   └── auth.js          # Verifies login tokens
├── models/
│   ├── User.js          # User accounts
│   └── Thread.js        # Conversation threads and messages
├── routes/
│   ├── auth.js          # Sign up and log in        (mounted at /api/auth)
│   ├── chat.js          # Send a message, get a reply   (mounted at /api)
│   └── thread.js        # List and manage threads       (mounted at /api)
├── utils/
│   └── openai.js        # Groq client helper that generates AI replies
├── server.js            # App entry point
└── package.json
```

A health check at `GET /` returns "The Big Dipper AI Backend is running smoothly!".

## Getting Started

### Prerequisites

- Node.js 18 or newer
- A MongoDB database (a free MongoDB Atlas cluster works)
- A Groq API key from https://console.groq.com

### Install

```bash
cd Backend
npm install
```

### Configure

Create a `Backend/.env` file:

```dotenv
MONGODB_URI=your_mongodb_connection_string
GROQ_API_KEY=your_groq_api_key
JWT_SECRET=a_long_random_string
```

Generate a strong secret with:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Run

```bash
npm start
```

The server listens on `http://localhost:8080` and prints "Connected with Database!" once MongoDB is reachable.

## Environment Variables

| Variable | Required | Purpose |
|---|---|---|
| `MONGODB_URI` | Yes | MongoDB connection string, ending with your database name |
| `GROQ_API_KEY` | Yes | Groq API key; the server fails to start without it |
| `JWT_SECRET` | Yes | Secret used to sign and verify login tokens |
| `PORT` | No | Set automatically by hosting providers; defaults to 8080 |

Variable names are case-sensitive and must match exactly. Never commit `.env`; it is listed in `.gitignore`.

## MongoDB Setup

1. Create a free cluster on MongoDB Atlas.
2. Create a database user under **Database Access**.
3. Under **Network Access**, allow `0.0.0.0/0` so the hosting provider can connect.
4. Copy the connection string from **Connect → Drivers**, replace `<password>` with your password, and set the database name at the end of the string.

## Deployment (Render)

1. Create a **Web Service** from the GitHub repository.
2. Set **Root Directory** to `Backend`.
3. Build command: `npm install`. Start command: `npm start`.
4. Add the environment variables from the table above. Do not add `PORT`.
5. Deploy and copy the service URL for use as `VITE_API_URL` in the frontend.

## Troubleshooting

- **`GROQ_API_KEY environment variable is missing`:** the variable is not set, or its name does not match exactly.
- **`Invalid scheme, expected connection string to start with mongodb://`:** `MONGODB_URI` holds a placeholder or is malformed. Remove quotes and check for leftover `<` `>` around the password.
- **`Failed to connect with Db`:** check the password, the database user, and that Atlas Network Access allows your host.
- **`Cannot find package.json` on Render:** set Root Directory to `Backend`.

## Security Notes

- Keep your Groq key, database password, and JWT secret out of the repository.
- Use a different JWT secret for each project.
- Set a usage limit on your Groq key, since a public chatbot can be called by anyone.