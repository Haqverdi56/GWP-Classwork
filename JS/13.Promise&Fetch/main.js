const productsDiv = document.querySelector('.products-div');
const form = document.querySelector('form');
const inputs = document.querySelectorAll("input")
const loading  = document.querySelector(".loading")

const BASE_URL = "https://api.escuelajs.co/api/v1"

function fetchProducts() {    
    // loading.className = "loading"
	fetch(`${BASE_URL}/products`)
		.then(res => res.json())
		.then(data => {
            console.log(data);
            loading.style.display = "none"
			data.forEach((item) => {
				productsDiv.innerHTML += `
            <div class="product">
                <div class="product-image">
                    <img src="${item.images[0]}" style="width: 100%;" alt="">
                </div>
                <div class="product-heading">
                    <p class="title">${item.title}</p>
                    <p class="description">${item.description.slice(0, 40)}</p>
                    <span>Price:${item.price}$</span>
                    <div><button class="deleteBtn" onclick="deleteProduct(${item.id},this)">Delete</button></div>
                </div>
            </div>`;
			});
		});
}

fetchProducts();

form.addEventListener('submit', function (e) {
	e.preventDefault();
    
	let newProductObj = {
        title: inputs[0].value,
        price: inputs[1].value,
        description: inputs[2].value,
        categoryId: 1,
        images: [inputs[3].value]
      };

	fetch('https://api.escuelajs.co/api/v1/products', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
		body: JSON.stringify(newProductObj),
	}).then(res => window.location.reload())
});


function deleteProduct (id, btn){
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
        method: 'DELETE'
    })
    btn.closest(".product").remove()
}