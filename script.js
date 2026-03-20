const products = [];
let cartCount = 0;

function createProducts() {

  // CLOTHES
  for (let i = 1; i <= 7; i++) {
    products.push({
      name: `Clothe ${i}`,
      category: "clothes",
      price: (i * 10) + 20,
      desc: `Stylish clothing item number ${i} designed for comfort and fashion.`,
      images: [
        `IMAGES/Clothes/clothe${i}.png`,
        `IMAGES/Clothes/clothe${i}.png`
      ]
    });
  }

  // FOOTWEAR
  for (let i = 1; i <= 7; i++) {
    products.push({
      name: `Footwear ${i}`,
      category: "footwear",
      price: (i * 15) + 30,
      desc: `Durable and trendy footwear number ${i} for everyday use.`,
      images: [
        `IMAGES/Footwear/footwear${i}.png`,
        `IMAGES/Footwear/footwear${i}.png`
      ]
    });
  }

  // ELECTRONICS
  for (let i = 1; i <= 7; i++) {
    products.push({
      name: `Electronic ${i}`,
      category: "electronics",
      price: (i * 50) + 100,
      desc: `High-performance electronic device number ${i} with modern features.`,
      images: [
        `IMAGES/Electronics/electronic${i}.png`,
        `IMAGES/Electronics/electronic${i}.png`
      ]
    });
  }
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