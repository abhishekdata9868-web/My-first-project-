# Mini GPT

A beginner-friendly ChatGPT-style application using a web frontend, FastAPI backend, and OpenRouter.

## Project structure

```text
frontend/
  index.html
  style.css
  app.js
backend/
  main.py
  requirements.txt
```

## Run locally

### 1. Install backend dependencies

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

### 2. Configure your OpenRouter API key

Set `OPENROUTER_API_KEY` as an environment variable. Never put the API key in frontend JavaScript or commit it to Git.

### 3. Start the API

```bash
uvicorn main:app --reload
```

The API runs at `http://localhost:8000`.

### 4. Open the frontend

Open `frontend/index.html` in a browser while the backend is running.

The app sends chat messages to `/chat` and keeps conversation history in the browser session.

## Next upgrades

- Streaming responses
- Better ChatGPT-style UI
- Persistent conversations
- Authentication
- File/image uploads
- Model selector
- Deployment
