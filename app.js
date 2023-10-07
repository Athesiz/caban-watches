   // Function to load and change images as the user scrolls
   function loadImagesOnScroll() {
    const imageContainer = document.getElementById("image-container");

    // Loop through image filenames from 001 to 095
    for (let i = 1; i <= 1100; i++) {
        const image = new Image();
        image.src = `caban/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
        imageContainer.appendChild(image);
    }

    // Function to change images based on scroll position
    function changeImagesOnScroll() {
        const scrollTop = window.scrollY || window.pageYOffset;

        // Calculate the index of the image to display based on scroll position
        const imageIndex = Math.floor((scrollTop / (document.body.scrollHeight - window.innerHeight)) * 1100);

        // Show the corresponding image
        for (let i = 0; i < 1100; i++) {
            if (i === imageIndex) {
                imageContainer.children[i].style.display = "block";
            } else {
                imageContainer.children[i].style.display = "none";
            }
        }
    }

    // Attach the scroll event listener
    window.addEventListener("scroll", changeImagesOnScroll);
}

// Load images when the page is ready
window.addEventListener("DOMContentLoaded", loadImagesOnScroll);

const navbarController = new ScrollMagic.Controller();

// Pin the navigation bar above the video
const pinNavbarScene = new ScrollMagic.Scene({
  triggerElement: ".navbar",
  triggerHook: 0,
  duration: 0, // Duration 0 means it pins the element
})
  .setPin(".navbar")
  .addTo(navbarController);

  
const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
const button = intro.querySelector("button")
const section = document.querySelector("section");
const end = section.querySelector("h1");
const controller = new ScrollMagic.Controller();


let scene = new ScrollMagic.Scene({
  duration: 460,
  triggerElement: intro,
  triggerHook: 0
})
  
  .setPin(intro)
  .addTo(controller);
  
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 200,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);


let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 250;
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

