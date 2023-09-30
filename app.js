


const html = document.documentElement;
const canvas = document.querySelector('.nex');
const context = canvas.getContext('2d');


const currentFrame = index => (
    `caban/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
)

const frameCount = 100;

const preloadImages = () => {
    for (let i = 1; i < frameCount; i++){
        const img = new Image();
        img.src = currentFrame(i);
    }
};

preloadImages();

canvas.height = 3840;
canvas.width = 2160;
const img = new Image();
img.src = currentFrame(1);
img.onload = function (){
    context.drawImage(img, 0, 0)
}
const updateImage = index => {
    img.src = currentFrame(index)
    context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () =>{
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFracton = scrollTop / maxScrollTop;
    const frameindex = Math.min(frameCount - 1, Math.floor
        (scrollFracton * frameCount));
        requestAnimationFrame( () => updateImage(frameindex + 1))
        

})






window.addEventListener("scroll", function () {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Calculate the rotation angle based on the scroll position
  const rotation = (scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 360;

  // Rotate the watch hand
  document.querySelector(".hand").style.transform = `rotate(${rotation}deg)`;
});


  // Get references to the buttons and product items
  const showEvenButton = document.getElementById("lng-showEvenButton");
  const showOddButton = document.getElementById("lng-showOddButton");
  const showAllButton = document.getElementById("lng-showAllButton");
  const productItems = document.querySelectorAll(".product-item");

  // Function to toggle visibility based on alt attribute
  function toggleVisibility(isEven, isOdd) {
    productItems.forEach((item, index) => {
      const altNumber = parseInt(item.querySelector("img").getAttribute("alt"));
      if ((isEven && altNumber % 2 === 0) || (isOdd && altNumber % 2 !== 0) || (!isEven && !isOdd)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  // Event listeners for the buttons
  showEvenButton.addEventListener("click", () => {
    toggleVisibility(true, false);
  });

  showOddButton.addEventListener("click", () => {
    toggleVisibility(false, true);
  });

  showAllButton.addEventListener("click", () => {
    toggleVisibility(true, true);
  });

