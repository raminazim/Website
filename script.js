const messages = [
     "Hey There 👋",
     "My Name Is Ramin 👨‍💻",
     "Check Out My Links Below 👇",
     "Let's Connect! 🤝",

 ];
 
 const messageElement = document.getElementById("dynamic-message");
 let messageIndex = 0;
 
 function updateMessage() {
     messageIndex = (messageIndex + 1) % messages.length;
     messageElement.innerHTML = messages[messageIndex];
 }
 
 setInterval(updateMessage, 3000);