const socket = io();
        const sendBtn = document.getElementById('sendBtn');
        const usernameInput = document.getElementById('username');
        const messageInput = document.getElementById('message');
        const allMessages = document.getElementById('messages');
    
        let username = null;
    
        // Function to scroll to the bottom of the messages container
        function scrollToBottom() {
            allMessages.scrollTop = allMessages.scrollHeight;
        }
    
        // Listen for messages from the server
        socket.on("message", (data) => {
            const { message, sender } = data; // Sender is the username
    
            const container = document.createElement('div');
            container.classList.add('message-container');
            if (sender === username) {
                container.classList.add('own-message');
            } else {
                container.classList.add('other-message');
            }
    
            const userElement = document.createElement('div');
            userElement.classList.add('username');
            userElement.innerText = sender;
    
            const messageElement = document.createElement('p');
            messageElement.classList.add('message');
            messageElement.innerText = message;
    
            container.appendChild(userElement);
            container.appendChild(messageElement);
            allMessages.appendChild(container);
    
            // Scroll to the bottom after adding the new message
            scrollToBottom();
        });
    
        sendBtn.addEventListener("click", () => {
            // Ensure the user has entered a username
            if (!username) {
                username = usernameInput.value.trim();
                if (!username) {
                    alert("Please enter a username before sending a message.");
                    return;
                }
                usernameInput.disabled = true; // Lock the username input
            }
    
            const message = messageInput.value;
            if (message.trim() !== "") {
                socket.emit('user_message', { message, sender: username }); // Send message with username
                messageInput.value = "";
            }
        });