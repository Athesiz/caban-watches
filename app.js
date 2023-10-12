

const navbarController = new ScrollMagic.Controller();

// Pin the navigation bar above the video
const pinNavbarScene = new ScrollMagic.Scene({
  triggerElement: ".navbar",
  triggerHook: 0,
  duration: 0, // Duration 0 means it pins the element
})
  .setPin(".navbar")
  .addTo(navbarController);

  
  
  const leftRectangle = document.querySelector('.rectangle:nth-child(1)');
  const centerRectangle = document.querySelector('.rectangle:nth-child(2)');
  const rightRectangle = document.querySelector('.rectangle:nth-child(3)');
  const scrollContainer = document.querySelector('.scroll-container');
   
  




  window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
      const leftTranslate = `translateX(${scrollPosition * 6}px)`;
      const centerTranslate = `translateX(${scrollPosition * 70}px)`;
      const rightTranslate = `translateX(${scrollPosition * 350}px)`;
      const rotation = 'rotate(-20deg)';

      leftRectangle.style.transform = `${leftTranslate} ${rotation}`;
      centerRectangle.style.transform = `${centerTranslate} ${rotation}`;
      rightRectangle.style.transform = `${rightTranslate} ${rotation}`;
  
  
      scrollContainer.style.transform = leftTranslate; // Apply transformation to the container for fixed left and center rectangles
  });
  





const catalog = document.querySelector(".catalog");

const intro = document.querySelector(".intro");
const text = intro.querySelector("h1");
const section = document.querySelector("section");
const end = section.querySelector("h1");
const controller = new ScrollMagic.Controller();


let scene = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0
})

  .setPin(intro)
  .addTo(controller);

const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 300,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);


let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 200;
});

setInterval(() => {
  delay += (scrollpos - delay) * 0.1;

  video.currentTime = delay;
}, 33.3);


















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


window.addEventListener("scroll", function () {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Calculate the rotation angle based on the scroll position
  const rotation = (scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 360;

  // Rotate the watch hand
  document.querySelector(".hand").style.transform = `rotate(${rotation}deg)`;
});

