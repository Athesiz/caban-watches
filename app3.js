const texttt =  document.querySelector(".unit3");
const textt =  document.querySelector(".unit2");
const intro = document.querySelector(".intro");
const text = intro.querySelector("h1");
const controller = new ScrollMagic.Controller();
const sblock = document.querySelector(".sblock");
const rectangle = document.querySelector(".rectangl");
const rectangll = document.querySelector(".rectangll");

let scene = new ScrollMagic.Scene({
  
  duration: 650,
  triggerElement: intro,
  triggerHook: 0
})


  .setPin(intro)
  .addTo(controller);

  const textAnim2 = TweenMax.fromTo(textt, 3, { opacity: 1 }, { opacity: 0 });

let scene3 = new ScrollMagic.Scene({
  duration: 250,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim2)
  .addTo(controller);



const textAnim = TweenMax.fromTo(text, 3, { opacity: 0 }, { opacity: 1 });

let scene2 = new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

  const textAnim3 = TweenMax.fromTo(texttt, 3, { opacity: 0 }, { opacity: 1 });

  let scene4 = new ScrollMagic.Scene({
    duration: 500,
    triggerElement: intro,
    triggerHook: 0
  })
    .setTween(textAnim3)
    .addTo(controller);

    
    const textAnim7 = TweenMax.fromTo(rectangle, 3, { opacity: 0 }, { opacity: 1 });

    let scene6 = new ScrollMagic.Scene({
      duration: 500,
      triggerElement: intro,
      triggerHook: 0
    })
      .setTween(textAnim7)
      .addTo(controller);

      const textAnim8 = TweenMax.fromTo(rectangll, 3, { opacity: 1 }, { opacity: 0 });

      let scene8 = new ScrollMagic.Scene({
        duration: 800,
        triggerElement: intro,
        triggerHook: 0
      })
        .setTween(textAnim8)
        .addTo(controller);

      
     
let scene5 = new ScrollMagic.Scene({
      
duration: 1400,
      triggerElement: sblock,
      triggerHook: 0
    })
    

.setPin(sblock)
      .addTo(controller);




window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;

  // Adjust the translateY property based on the scroll position
  text.style.transform = `translateY(-${scrollY * 0.5}px)`;
  texttt.style.transform = `translateY(-${scrollY * 0.5}px)`;
});



document.addEventListener('DOMContentLoaded', function () {
  const greenButton = document.querySelector('.green');
  const redButton = document.querySelector('.red');
  const blueButton = document.querySelector('.blue');
  const o = document.querySelector('.o');
  const fblockpco = document.querySelector('.fblockpco');
  const imageo = document.querySelector('.imageo');
  const timageo = document.querySelector('.timageo');
  const sblocko = document.querySelector('.sblocko');



  greenButton.addEventListener('click', function () {
      o.src = 'Images/caban.mp4';
      fblockpco.src = 'Images/caban1.jpg';
      imageo.src = 'Images/caban2.jpg';
      timageo.src = 'Images/caban4.jpg';
      sblocko.src = 'Images/caban3.jpg';
  });
  
  redButton.addEventListener('click', function () {
      o.src = 'Images/caban1.mov';
      fblockpco.src = 'Images/22.png';
      imageo.src = 'Images/22.png'
      timageo.src = 'Images/24.png';
      sblocko.src = 'Images/23.png';
  });
  
  blueButton.addEventListener('click', function () {
      o.src = 'Images/caban2.mov';
      fblockpco.src = 'Images/33.png';
      imageo.src = 'Images/32.png';
      timageo.src = 'Images/34.png';
      sblocko.src = 'Images/31.png';
  });

  greenButton.click();
});


window.addEventListener("scroll", function () {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Calculate the rotation angle based on the scroll position
  const rotation = (scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 360;

  // Rotate the watch hand
  document.querySelector(".hand").style.transform = `rotate(${rotation}deg)`;
});

