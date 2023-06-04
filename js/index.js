const productBoxes = document.querySelectorAll(".productbox");
const sizecContainter = document.querySelectorAll (".productbox");



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
    `;
    }
  );

  productBox.addEventListener("mouseout", function (){
    colorsContainer.innerHTML = "";
  },1500);
});







