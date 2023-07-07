const form = document.forms.addmessage;
const userName = form.username;
const sendMessage = form.sendbutton;
const messageToChat = form.message;
const recentMessages = document.getElementById("recentmessages");

const newMessage = (event) =>
{
    event.preventDefault();

    if(userName.value.length < 3)
    {
        alert("Nickname too short!");
        return;
    }

    recentMessages.innerHTML += 
    `
        <div class="title">
            <p>${userName.value}</p>
            <p>${new Date().toLocaleString()}</p>
        </div>
        <div class="text">
            <p>${messageToChat.value}</p>
        </div>
    `

    userName.value = "";
    messageToChat.value = "";
}

form.addEventListener("submit", newMessage);