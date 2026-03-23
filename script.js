
const products = [];
let cartCount = 0;

function createProducts() {

  // CLOTHES
  for (let i = 1; i <= 7; i++) {
    products.push({
      name: `Clothe ${i}`,
      category: "clothes",
      price: (i * 10) + 20,
      desc: clothesDescriptions[i - 1],
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
     desc: footwearDescriptions[i - 1],
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
      desc: electronicsDescriptions[i - 1],
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
const clothesDescriptions = [
  "Lightweight cotton outfit for everyday comfort.",
  "Classic T-shirt with a stylish design.",
  "Long-sleeve shirt ideal for cooler weather.",
  "A pair of shorts perfect for summer activities.",
  "sweaters made from soft wool, designed to keep you warm and comfortable.",
  "Full dress for children, made from high-quality materials, perfect for special occasions.",
  "Elegant outfit suitable for special occasions."
];

const footwearDescriptions = [
  "Comfortable sneakers for daily wear.",
  "High-performance running shoes.",
  "Light sandals perfect for warm weather.",
  "Stylish shoes with strong grip.",
  "Durable trainers for sports activities.",
  "Flat shoes designed for all-day comfort.",
  "Timberland boots made from premium leather, designed for durability and style."
];

const electronicsDescriptions = [
  "Smartwatch perfect for fitness tracking and notifications.",
  "Earpods with noise cancellation technology.",
  "Infinix mobile phone with long-lasting battery life.",
  "Electric kettle with fast boiling capability.",
  "USB cable for fast charging and data transfer.",
  "High-speed laptop for work and gaming.",
  "45 in 1 Precision Screwdriver Set for Phone Computer Repair"
];
createProducts();
displayProducts(products);