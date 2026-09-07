const API_URL = "/chat";
const form = document.getElementById("chat-form");
const input = document.getElementById("message");
const chat = document.getElementById("chat");
const history = [];

function addMessage(role, text) {
  const div = document.createElement("div");
  div.className = `message ${role}`;
  div.textContent = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  input.value = "";
  addMessage("user", text);
  history.push({ role: "user", content: text });

  const button = form.querySelector("button");
  button.disabled = true;
  button.textContent = "Thinking...";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: history }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || "Request failed");

    addMessage("assistant", data.reply);
    history.push({ role: "assistant", content: data.reply });
  } catch (error) {
    addMessage("assistant", `Error: ${error.message}`);
  } finally {
    button.disabled = false;
    button.textContent = "Send";
    input.focus();
  }
});

addMessage("assistant", "Hello! I am Mini GPT. Ask me anything.");
