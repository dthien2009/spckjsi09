import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { db } from "./config.js"
const productContainer = document.querySelector(".product-container")

const querySnapshot = await getDocs(collection(db, "bookatable"));
querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    productContainer.innerHTML +=
        `<div class="product">
    <h3>${doc.data().name||"no name"}</h3>
    <p>email:${doc.data().email||"no email"}</p>
    <p>date: ${doc.data().datetime||"no datetime"}</p>
    <p>people: ${doc.data().select1||"no select1"}</p>
    <p>message: ${doc.data().message||"no message"}</p>
    <button class="view-detail" data-id="${doc.id}">View Detail History</button>
    </div>`
    const productDetailBtn = document.querySelectorAll(".view-detail");
    productDetailBtn.forEach((button) => {
        button.addEventListener("click", (e) => {
            const productId = e.target.getAttribute("data-id");
            window.location.href = `product_detail.html?id=${productId}`;

        });
    });
});