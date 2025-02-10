// login
const login = document.querySelector(".login");
const loginForm = login.querySelector(".login__form");
const loginInput = login.querySelector(".login__input");

// chat
const chat = document.querySelector(".chat");
const chatForm = chat.querySelector(".chat__form");
const chatInput = chat.querySelector(".chat__input");

const user = {id: "", name: "", color: ""};

const colors = [
    "cadetblue",
    "darkgoldenrod",
    "cornflowerblue",
    "darkkhaki",
    "hotpink",
    "gold"
]

let websocket;

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

const handleSubmit = (event) => {
    event.preventDefault();

    user.id = crypto.randomUUID();
    user.name = loginInput.value;
    user.color = getRandomColor();

    login.style.display = "none";
    chat.style.display = "flex";

    websocket = new WebSocket("ws://localhost:8080");

    console.log(user);
}

loginForm.addEventListener("submit", handleSubmit);