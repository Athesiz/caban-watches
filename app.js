

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
  const controller = new ScrollMagic.Controller();
  
  
  var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  var newVerticalTranslation = -588*8.28 +(828 - document.documentElement.clientHeight);
  document.querySelector('.catalog2 img').style.transform = 'translate(0%, ' + newVerticalTranslation + 'px)';
  
  var newVerticalTranslation1 = 15*8.28 +(828 - document.documentElement.clientHeight);
  document.querySelector('.lng-sbi').style.transform = 'translate(0%, ' + newVerticalTranslation1 + 'px)';
  
  var newVerticalTranslation2 = -1054*8.28 +(2 * (828 - document.documentElement.clientHeight));
  document.querySelector('.catalog3 img').style.transform = 'translate(0%, ' + newVerticalTranslation2 + 'px)';
  
  var newVerticalTranslation3 = -575*8.28 +(828 - document.documentElement.clientHeight);
  document.querySelector('.lng-tbi').style.transform = 'translate(0%, ' + newVerticalTranslation3 + 'px)';
  
  var newVerticalTranslation4 = -1398*8.28 +(3 * (828 - document.documentElement.clientHeight));
  document.querySelector('.catalog4 img').style.transform = 'translate(0%, ' + newVerticalTranslation4 + 'px)';
  
  var newVerticalTranslation5 = -1042*8.28 +(828 - document.documentElement.clientHeight);
  document.querySelector('.lng-4bi').style.transform = 'translate(0%, ' + newVerticalTranslation5 + 'px)';
  
  var newVerticalTranslation6 = -1620*8.28 +(4 * (828 - document.documentElement.clientHeight));
  document.querySelector('.catalog5 img').style.transform = 'translate(0%, ' + newVerticalTranslation6 + 'px)';
  
  var newVerticalTranslation7 = -1380*8.28 +(5 * (828 - document.documentElement.clientHeight));
  document.querySelector('.lng-5bi').style.transform = 'translate(0%, ' + newVerticalTranslation7 + 'px)';
  
  var newVerticalTranslation8 = -1605*8.28 +(6 * (828 - document.documentElement.clientHeight));
  document.querySelector('.lng-6bi').style.transform = 'translate(0%, ' + newVerticalTranslation8 + 'px)';
  
  var newVerticalTranslation9 = -1130*8.28 +(1 * (828 - document.documentElement.clientHeight));
  document.querySelector('.grid').style.transform = 'translate(0%, ' + newVerticalTranslation9 + 'px)';
  
  
  const catalog1 = document.querySelector(".catalog1");
  let fi = new ScrollMagic.Scene({
    duration: 4040,
    triggerElement: catalog1,
    triggerHook: 0
  })
    .setPin(catalog1)
    .addTo(controller);

  
   const catalog2 = document.querySelector(".catalog2");
    let si = new ScrollMagic.Scene({
    
      duration: 3030,
      triggerElement: catalog1,
      triggerHook: 0
    })
      .setPin(catalog2)
      .addTo(controller);

      const catalog3 = document.querySelector(".catalog3");
      let ti = new ScrollMagic.Scene({
      
        duration: 2020,
        triggerElement: catalog1,
        triggerHook: 0
      })
        .setPin(catalog3)
        .addTo(controller);

      const catalog4 = document.querySelector(".catalog4");
        let foi = new ScrollMagic.Scene({
        
          duration: 1010,
          triggerElement: catalog1,
          triggerHook: 0
        })
          .setPin(catalog4)
          .addTo(controller);
    
   
  document.addEventListener('DOMContentLoaded', function () {
    const tagol = document.querySelector('.tagol');
    const imgpc = document.querySelector('.imgpc');
    const imgpc2 = document.querySelector('.imgpc2');
    const imgpc3 = document.querySelector('.imgpc3');
    const imgpc4 = document.querySelector('.imgpc4');
    const imgpc5 = document.querySelector('.imgpc5');
    if (window.innerWidth < 500) {
      tagol.src = 'Images/caban.mp4';  
      imgpc.src = 'Images/110500.jpg';    
      imgpc2.src = 'Images/28250.PNG';
      imgpc3.src = 'Images/110300.jpg';
      imgpc4.src = 'Images/28250.jpg';
      imgpc5.src = 'Images/19300(6).jpg'; 
    } 
    else {
      tagol.src = 'Images/caban1.mov'; 
      imgpc.src = 'Images/f22.jpg'; 
      imgpc2.src = 'Images/f22.jpg'; 
      imgpc3.src = 'Images/f22.jpg'; 
      imgpc4.src = 'Images/f22.jpg'; 
      imgpc5.src = 'Images/f22.jpg'; 
    }});

  window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
      let leftTranslate, centerTranslate, rightTranslate;

      if (window.innerWidth < 500) {
          leftTranslate = `translateX(${scrollPosition * 0.5}px)`;
          centerTranslate = `translateX(${scrollPosition * 0.7}px)`;
          rightTranslate = `translateX(${scrollPosition * 1}px)`;
          
      } 
      else {
          leftTranslate = `translateX(${scrollPosition * 3}px)`;
          centerTranslate = `translateX(${scrollPosition * 35}px)`;
          rightTranslate = `translateX(${scrollPosition * 200}px)`;
      }
      
      const rotation = 'rotate(-20deg)';

      leftRectangle.style.transform = `${leftTranslate} ${rotation}`;
      centerRectangle.style.transform = `${centerTranslate} ${rotation}`;
      rightRectangle.style.transform = `${rightTranslate} ${rotation}`;
  
  
      scrollContainer.style.transform = leftTranslate; // Apply transformation to the container for fixed left and center rectangles
  });
  







const intro = document.querySelector(".intro");
const text = intro.querySelector("h1");
const section = document.querySelector("section");
const end = section.querySelector("h1");



let scene = new ScrollMagic.Scene({
  
  duration: 400,
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

