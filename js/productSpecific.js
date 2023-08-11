


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);


const productContainer = document.querySelector(".Productspecificpage");
const baseUrl = "https://rainyvavik.no/Rainydays/wp-json/wc/store/products/" + id;
const proxy = "https://noroffcors.onrender.com/";
const corsFix = proxy + baseUrl;

async function getProduct() {
  try {
    const response = await fetch(corsFix);
    const product = await response.json();
    console.log(product);

    createHtml(product);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

getProduct();


function createHtml (product) {

    productContainer.innerHTML += `
    <section class="Productspecific">
    <section class="specific_pics">
    <div class="thumbnails">
        <div><img src="${product.images[0].src}" alt="Brown fleece" /></div>
        <div><img src="${product.images[0].src}" alt="Brown fleece" /></div>
        <div><img src="${product.images[0].src}" alt="Brown fleece" /></div> 
    </div>                 
    <div class="selected_picture">
        <img src="${product.images[0].src}" alt="Brown fleece" class="T-rex"/>
    </div>
</section>
<section class="productoptions">        
        <h3 class="productname">${product.name}</h3>
    <div class="product_info_content">
        <div>
        <p class="italic">Colours:</p>
          <nav class="colours">
            <div class="colors"></div>
            <div class="colors1"></div>
            <div class="colors2"></div>
            <div class="colors3"></div>
        </nav>
        <div>
          <p class="italic">Size:</p>
          <form >
            <select name="Size" class="Drop_down">
                <option value="small">${product.attributes[0].terms[0].name}</option>
                <option value="medium">${product.attributes[0].terms[1].name}</option>
                <option value="Large">${product.attributes[0].terms[2].name}</option>
                <option value="X-large">${product.attributes[0].terms[3].name}</option>
              </select>
          </form>
      </div>
        <p class="product_des">
        ${product.short_description}
        </p>
        <button class="cta2" id="addToCart">Add to cart</button>
        <div id="addedToCartConfirmation"></div>
    </div> 
      <div class="priceAndStock">         
        <div class="price_div">
        <p class="price">$${product.prices.regular_price}</p> 
        <p class="salePrice">$${product.prices.sale_price}</p>             
        </div>
        <div class="stockWatching">
         <p>${product.low_stock_remaining}
         products left in stock.</p>               
        </div>
      </div> 
    </div>    
</section>        
</section>
<Section class="product_details">
${product.description}
`;
const addToCart = document.querySelector("#addToCart");
const shoppingCartIndication = document.querySelector(".shoppingCartIndication");
const numerOfItems = document.querySelector(".numerOfItems");
const addedToCartConfirmation = document.querySelector("#addedToCartConfirmation");

let countNumberOfItems = 0;

numerOfItems.innerHTML = countNumberOfItems;

addToCart.onclick = function () {
    countNumberOfItems++;
    numerOfItems.innerHTML = countNumberOfItems;
    shoppingCartIndication.style.display = "inline";
    addedToCartConfirmation.innerHTML = "Product was successfully added to you cart.";
    
    setTimeout (function() {
        addedToCartConfirmation.innerHTML ="";
    }, 1500);
};
};

