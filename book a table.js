import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { db } from "./config.js"
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const datetimeInput = document.querySelector("#datetime")
const select1 = document.querySelector("#select1")
const message = document.querySelector("#message")
const btnButton = document.querySelector("#add-button")
const lsdbButton = document.querySelector("#lsdb-button")

btnButton.addEventListener("click", async(e) => {
    e.preventDefault() //xoa di cai reload
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const datetimeValue = datetimeInput.value;
    const select1Value = select1.value;
    const messageValue = message.value;
    await addDoc(collection(db, "bookatable"), {
        name: nameValue,
        email: emailValue,
        datetime: datetimeValue,
        select1: select1Value,
        message: messageValue
    })
    alert("Book a table successfully")
})

lsdbButton.addEventListener("click", async(e) => {
    e.preventDefault() //xoa di cai reload
    window.location.href = "lichsudatban.html";
})