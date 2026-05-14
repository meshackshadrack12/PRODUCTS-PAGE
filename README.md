# EliteStore Advanced

EliteStore Advanced is a modern, responsive, front-end e-commerce product page built using Vanilla HTML, CSS, and JavaScript. It provides a clean and interactive interface for browsing products across various categories like Clothes, Footwear, and Electronics.

## Features

- **Product Grid:** Displays products dynamically using JavaScript.
- **Filtering:** Users can filter products by categories: All, Clothes, Footwear, and Electronics.
- **Search Functionality:** Real-time search allows users to find products by name.
- **Interactive Product Cards:** 
  - Image swap on hover to show alternate product views.
  - "Add to Cart" button that updates the cart counter in the header.
- **Responsive Design:** Adapts seamlessly to different screen sizes, ensuring a good experience on mobile devices.

## Technologies Used

- **HTML5:** For structuring the application.
- **CSS3:** For styling, grid layouts, and responsive media queries.
- **JavaScript (Vanilla):** For DOM manipulation, event handling, data arrays, filtering, and search logic.

## Project Structure

```text
PRODUCTS-PAGE-main/
├── IMAGES/           # Directory containing product images
├── index.html        # Main HTML file structure
├── script.js         # JavaScript logic for products, filters, and cart
└── styles.css        # CSS styling rules
```

## Setup and Usage

1. **Clone or Download:** Download the repository files to your local machine.
2. **Open in Browser:** Since this is a static site with no backend dependencies, simply open the `index.html` file in your preferred web browser to view and interact with the application.

## Customization

You can easily modify the product data by editing the `createProducts()` function in `script.js`. Descriptions for each category can be updated in the respective arrays (`clothesDescriptions`, `footwearDescriptions`, `electronicsDescriptions`).
