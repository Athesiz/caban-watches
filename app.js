
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
  
var realHeight = document.documentElement.clientHeight;
var addressBarHeight = window.innerHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', function () {
  if (window.innerWidth > 5) {
    var newVerticalTranslation = 0;
    document.querySelector('.catalog1 img').style.transform = 'translate(0%, ' + newVerticalTranslation + 'px)';
    document.querySelector('.lng-sbi').style.transform = 'translate(0%, ' + newVerticalTranslation + 'px)';

  var newVerticalTranslation = -realHeight*4;
  document.querySelector('.catalog2 img').style.transform = 'translate(0%, ' + newVerticalTranslation + 'px)';
  document.querySelector('.lng-tbi').style.transform = 'translate(0%, ' + newVerticalTranslation + 'px)';

  var newVerticalTranslation2 = -realHeight*7;
  document.querySelector('.catalog3 img').style.transform = 'translate(0%, ' + newVerticalTranslation2 + 'px)';
  document.querySelector('.lng-4bi').style.transform = 'translate(0%, ' + newVerticalTranslation2 + 'px)';
  
  
  var newVerticalTranslation4 = -realHeight*9;
  document.querySelector('.catalog4 img').style.transform = 'translate(0%, ' + newVerticalTranslation4 + 'px)';
  document.querySelector('.lng-5bi').style.transform = 'translate(0%, ' + newVerticalTranslation4 + 'px)';

  var newVerticalTranslation4 = -realHeight*10;
  document.querySelector('.catalog5 img').style.transform = 'translate(0%, ' + newVerticalTranslation4 + 'px)';
  document.querySelector('.lng-6bi').style.transform = 'translate(0%, ' + newVerticalTranslation4 + 'px)';

  
  var newVerticalTranslation8 = -(realHeight * 11);
  document.querySelector('.grid').style.transform = 'translate(0%, ' + newVerticalTranslation8 + 'px)';
  } 
  else {
  var newVerticalTranslation = -(realHeight * 5.2);
  document.querySelector('.catalog2 img').style.transform = 'translate(0%, ' + newVerticalTranslation + 'px)';
  document.querySelector('.lng-tbi').style.transform = 'translate(0%, ' + newVerticalTranslation + 'px)';

  var newVerticalTranslation2 = -(realHeight * 9.4);
  document.querySelector('.catalog3 img').style.transform = 'translate(0%, ' + newVerticalTranslation2 + 'px)';
  document.querySelector('.lng-4bi').style.transform = 'translate(0%, ' + newVerticalTranslation2 + 'px)';
  
  
  var newVerticalTranslation4 = -(realHeight * 12.6);
  document.querySelector('.catalog4 img').style.transform = 'translate(0%, ' + newVerticalTranslation4 + 'px)';
  document.querySelector('.lng-5bi').style.transform = 'translate(0%, ' + newVerticalTranslation4 + 'px)';

  var newVerticalTranslation6 = -(realHeight * 14.8);
  document.querySelector('.catalog5 img').style.transform = 'translate(0%, ' + newVerticalTranslation6 + 'px)';
  document.querySelector('.lng-6bi').style.transform = 'translate(0%, ' + newVerticalTranslation6 + 'px)';
  
  var newVerticalTranslation8 = -(realHeight * 10);
  document.querySelector('.grid').style.transform = 'translate(0%, ' + newVerticalTranslation8 + 'px)';
  }});/**/

  

  const catalog1 = document.querySelector(".catalog1");
  let fi = new ScrollMagic.Scene({
    duration: realHeight * 4,
    triggerElement: catalog1,
    triggerHook: 0
  })
    .setPin(catalog1)
    .addTo(controller);

   const tbi = document.querySelector(".lng-tbi");
   const catalog2 = document.querySelector(".catalog2");
    let si = new ScrollMagic.Scene({
    
      duration: realHeight * 3,
      triggerElement: catalog1,
      triggerHook: 0
    })
      .setPin(tbi)
      .setPin(catalog2)
      .addTo(controller);

      const fobi = document.querySelector(".lng-4bi"); 
      const catalog3 = document.querySelector(".catalog3");
      let ti = new ScrollMagic.Scene({
      
        duration: realHeight * 2,
        triggerElement: catalog1,
        triggerHook: 0
      })
        .setPin(fobi)
        .setPin(catalog3)
        .addTo(controller);
      
      const fibi = document.querySelector(".lng-5bi");
      const catalog4 = document.querySelector(".catalog4");
        let foi = new ScrollMagic.Scene({
        
          duration: realHeight ,
          triggerElement: catalog1,
          triggerHook: 0
        })
          .setPin(fibi)
          .setPin(catalog4)
          .addTo(controller);
    
   
  
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

