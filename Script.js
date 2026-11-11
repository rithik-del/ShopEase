
let cartCount = 0;

function addToCart() {
    cartCount++;

    document.getElementById("cartCount")
        .innerText = cartCount;

    alert("Product added to cart!");
}

function searchProducts() {
    let input = document.getElementById("search")
        .value.toLowerCase();

    let products = document.querySelectorAll(".product");

    products.forEach(function(product) {
        let name = product.innerText.toLowerCase();

        product.style.display =
            name.includes(input) ? "block" : "none";
    });
}
