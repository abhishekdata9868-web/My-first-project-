# Mini GPT — Google Colab setup

This guide runs the existing FastAPI backend from Google Colab without putting the OpenRouter API key in the repository.

## 1. Open Colab

Create a new notebook at https://colab.research.google.com/.

## 2. Install dependencies

```python
!pip install -q -r https://raw.githubusercontent.com/abhishekdata9868-web/My-first-project-/main/backend/requirements.txt
```

## 3. Set the API key securely

Use Colab's Secrets panel (key icon on the left) and create a secret named `OPENROUTER_API_KEY`. Do not paste the key into a notebook cell or commit it to GitHub.

Then run:

```python
from google.colab import userdata
import os

os.environ["OPENROUTER_API_KEY"] = userdata.get("OPENROUTER_API_KEY")
print("API key loaded securely")
```

## 4. Download the backend

```python
!git clone -q https://github.com/abhishekdata9868-web/My-first-project-.git
%cd My-first-project-/backend
```

## 5. Start FastAPI

```python
!uvicorn main:app --host 0.0.0.0 --port 8000 &
```

## 6. Test locally inside Colab

```python
import requests

print(requests.get("http://127.0.0.1:8000/").json())
```

## 7. Test the chat endpoint

```python
import requests

r = requests.post(
    "http://127.0.0.1:8000/chat",
    json={"messages": [{"role": "user", "content": "Hello! Reply with exactly: COLAB_TEST_OK"}]},
    timeout=60,
)
print(r.status_code)
print(r.text[:1000])
```

Note: Colab runtimes are temporary. This is suitable for testing/learning, not permanent public hosting.
