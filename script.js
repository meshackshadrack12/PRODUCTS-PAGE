const products = [];
let cartCount = 0;

/* Generate realistic products */
function createProducts() {
  const categories = ["Clothes", "Footwear", "Electronics"];

  categories.forEach(category => {
    for (let i = 1; i <= 7; i++) {
      products.push({
        name: `${category} ${i}`,
        category,
        price: (i * 20) + 20,
        desc: `High-quality ${category.toLowerCase()} product`,
        images: [
          `./images/clothe1.png`,
          `./images/${category}-alt${i}.jpg`
        ]
      });
    }
  });
}

/* Display products */
function displayProducts(list) {
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    let currentImg = product.images[0];

    card.innerHTML = `
      <img src="${currentImg}">
      <div class="card-body">
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
        <strong>$${product.price}</strong>
        <button>Add to Cart</button>
      </div>
    `;

    const img = card.querySelector("img");

    // hover image swap
    card.addEventListener("mouseenter", () => {
      img.src = product.images[1];
    });

    card.addEventListener("mouseleave", () => {
      img.src = product.images[0];
    });

    // add to cart
    card.querySelector("button").onclick = () => {
      cartCount++;
      document.getElementById("cart-count").innerText = cartCount;
    };

    container.appendChild(card);
  });
}

/* Filter */
function filterProducts(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}

/* Search */
document.getElementById("search").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );
  displayProducts(filtered);
});

/* Init */
createProducts();
displayProducts(products);