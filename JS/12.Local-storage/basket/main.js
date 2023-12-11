const products = [
  {
    id: 1,
    name: "Iphone 15",
    img: "https://m.media-amazon.com/images/I/51iJx7YWDOL._AC_UF894,1000_QL80_.jpg",
    price: 2000,
  },
  {
    id: 2,
    name: "Samsung S23",
    img: "https://m.media-amazon.com/images/I/61ORjHcVaQL._AC_UF894,1000_QL80_.jpg",
    price: 1400,
  },
  {
    id: 3,
    name: "Xiaomu 13Pro",
    img: "https://m.media-amazon.com/images/I/41r9OjHZKiL._AC_UF1000,1000_QL80_.jpg",
    price: 1000,
  },
];
const productsContainer = document.getElementById("products");
products.forEach((product) => {
  const productElement = document.createElement("div");
  productElement.classList.add("product");
  productElement.innerHTML = `
    <h3>${product.name}</h3>
    <p>Price: $${product.price}</p>
    <img width="130px" src="${product.img}"></img>
    <button onclick="addToBasket(${product.id})">Add to basket</button>
    `;
  productsContainer.appendChild(productElement);
});

const basketDiv = document.getElementById("basket-items");
updateBasket();
function updateBasket() {
  basketDiv.innerHTML = "";

  const basketItems = JSON.parse(localStorage.getItem("basket") || []);

  basketItems.forEach((item) => {
    const itemElement = document.createElement("li");
    itemElement.classList.add("basket-item");
    itemElement.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price}</span>
          `;
    basketDiv.appendChild(itemElement);
  });
}

function addToBasket(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    const basketItems = JSON.parse(localStorage.getItem("basket")) || [];
    basketItems.push({
      id: product.id,
      name: product.name,
      price: product.price
    });
    localStorage.setItem("basket", JSON.stringify(basketItems));
    updateBasket();
  }
}
