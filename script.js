const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const chatMessages = document.getElementById("chatMessages");

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const text = input.value.trim();
  if (text === "") return;

  // Remove placeholder on first message
  const placeholder = document.querySelector(".placeholder");
  if (placeholder) placeholder.remove();

  const message = document.createElement("div");
  message.className = "message";
  message.textContent = text;

  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  input.value = "";
}
