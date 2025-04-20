import auth from "./config.js";
import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const btnButton = document.querySelector("#btn-login"); // Đổi ID nút cho phù hợp

btnButton.addEventListener("click", (e) => {
    e.preventDefault(); // Ngăn chặn reload trang

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
            const user = userCredential.user;
            alert(`${user.email} đã đăng nhập thành công!`);
            console.log("Người dùng đã đăng nhập:", user);
            window.location.href = "index.html"; // Chuyển hướng về trang chính sau khi đăng nhập thành công
        })
        .catch((error) => {
            alert(`Lỗi đăng nhập`);
            console.log("Lỗi đăng nhập");
        });
});