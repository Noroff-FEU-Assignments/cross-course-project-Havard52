const baseUrl = "https://rainyvavik.no/Rainydays/wp-json/wc/store/products?per_page=5";
const proxy = "https://noroffcors.onrender.com/";
const corsFix = proxy + baseUrl;
const productContainer = document.querySelector(".jackets");
const search = document.querySelector("#search")

async function getProducts() {
  try {
    const response = await fetch(corsFix);
    const products = await response.json();
    products.forEach(function(product) {

      productContainer.innerHTML += `
      <a href="productspecific.html?id=${product.id}" class="productbox">
        <img src="${product.images[0].src}" alt="Athlete jacket" class="Product"/>
        <h2 class="productname">${product.name}</h2>
        <div class="colorsContainer"></div>
        <p class="product_des">${product.short_description}</p>
        <div>
         <p class="price">$${product.prices.regular_price}</p> 
          <p class="salePrice">$${product.prices.sale_price}</p>
        </div>
      </a>`;
    });

  } catch (error) {
    console.error
    ("Error fetching the products:", error);
  }
  
const productBoxes = document.querySelectorAll(".productbox");
  
  productBoxes.forEach(function (productBox) {
    const colorsContainer = productBox.querySelector(".colorsContainer");
  
    productBox.addEventListener("mouseover", function() {
      colorsContainer.innerHTML = `
        <p class="italic">Colours:</p>
        <nav>
          <div class="colors"></div>
          <div class="colors1"></div>
          <div class="colors2"></div>
          <div class="colors3"></div>
        </nav>
      `;});
  
    productBox.addEventListener("mouseout", function (){
      colorsContainer.innerHTML = "";
    },1500);
  });
  
};

getProducts();