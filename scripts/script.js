let cart = [];

const aviso = document.getElementById("aviso-academico"); //A PÁGINA FOI CRIADA PARA FINS ACADÊMICOS.
let timer;

function fecharAviso() {
  aviso.classList.remove("visivel");
  clearTimeout(timer);
}

window.addEventListener("load", () => {
  aviso.classList.add("visivel");
  timer = setTimeout(fecharAviso, 5000); // fecha após 5s
});


function addToCart(productName, price) {
  cart.push({ name: productName, price });
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartCount.textContent = cart.length;
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - R$ ${item.price.toFixed(2)}
      <button onclick="removeFromCart(${index})" style="margin-left: 10px;">Remover</button>
    `;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total.toFixed(2);
}

function toggleModal() {
  const modal = document.getElementById("cart-modal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

document.getElementById("cart-icon").addEventListener("click", toggleModal);