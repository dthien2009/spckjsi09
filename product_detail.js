import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { db } from "../b7/config.js";
const productDetailBtn = document.querySelector(".product-detail");
const url = new URLSearchParams(window.location.search);
const productId = url.get("id");
console.log(productId);
const querySnapshot = await getDocs(collection(db, "bookatable"));
querySnapshot.forEach((doc) => {
    if (doc.id == productId) {
        productDetailBtn.innerHTML = `<div class="product-detail">
    <h3>${doc.data().name||"no name"}</h3>
    <p>email: ${doc.data().email||"no email"}</p>
    <p>date: ${doc.data().datetime||"no datetime"}</p>
    <p>people: ${doc.data().select1||"no select1"}</p>
    <p>message: ${doc.data().message||"no message"}</p>
    <button class="come_back" onclick="window.location.href='./lichsudatban.html'">Come Back</button>
    </div>`;
    }

});