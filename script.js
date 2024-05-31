function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    chatBox.style.display = chatBox.style.display === 'none' ? 'flex' : 'none';
}

function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatBody = document.getElementById('chatBody');
    const message = chatInput.value;

    if (message.trim()) {
        const userMessage = document.createElement('div');
        userMessage.className = 'message user';
        userMessage.textContent = message;
        chatBody.appendChild(userMessage);
        chatInput.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;

        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.className = 'message bot';
            botMessage.textContent = 'Xin chào! Cảm ơn bạn đã nhắn tin.';
            chatBody.appendChild(botMessage);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
    }
}

// Ensure the chat box is hidden initially
window.onload = () => {
    document.getElementById('chatBox').style.display = 'none';
};
