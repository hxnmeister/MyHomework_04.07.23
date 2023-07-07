/*Завдання №1
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

form.addEventListener("submit", newMessage);*/

/*Завдання №2
const questions = 
[
    `
    <p><b>1)</b> How many letters are in the word "Hello"?</p>
    <form id="question">
        <label>
            <input type="radio" name="answer" value="true">
            5
        </label>
        <br>
        <label>
            <input type="radio" name="answer" value="false">
            2
        </label>
        <br>
    </form>
    `,
    `
    <p><b>2)</b> How many letters are in the word "World"?</p>
    <form id="question">
        <label>
            <input type="radio" name="answer" value="false">
            4
        </label>
        <br>
        <label>
            <input type="radio" name="answer" value="true">
            5
        </label>
        <br>
    </form>
    `
];

let correct = 0;
let currentQuestion = 0;

const examField = document.getElementById("exam");

examField.innerHTML = questions[currentQuestion] + `<button id="next">Next</button>`;

const displayQuestion = () =>
{
    if(Array.from(document.forms.question.answer).find(x => x.checked).value == "true") ++correct;

    ++currentQuestion;

    if(currentQuestion + 1 === questions.length)
    {
        examField.innerHTML = questions[currentQuestion] + `<button id="finish">Finish</button>`;
    }
    else
    {
        examField.innerHTML = questions[currentQuestion] + `<button id="next">Next</button>`;
    }

}
const showResult = () => 
{
    if(Array.from(document.forms.question.answer).find(x => x.checked).value == "true") ++correct;
    examField.innerHTML = `<p>Your result is: ${correct}!</p>`;
}

document.addEventListener("click", (event) => 
{
    if(event.target.id === "next") displayQuestion();
    else if(event.target.id === "finish") showResult();
});*/

