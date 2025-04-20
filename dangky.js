import auth from "./config.js"
import {
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js"
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const btnButton = document.querySelector("#btn-register")
btnButton.addEventListener("click", (e) => {
    e.preventDefault() //xoa di cai reload
    const emailValue = emailInput.value
    console.log(emailValue)
    const passwordValue = passwordInput.value
    console.log(passwordValue)
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            alert(`${user.email} has signed up`)
            window.location.href = "dangnhap.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            alert(`${user.email} dang ky lai di loi roi`)
        });
})