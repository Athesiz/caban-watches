const texttt =  document.querySelector(".unit3");
const textt =  document.querySelector(".unit2");
const intro = document.querySelector(".intro");
const text = intro.querySelector("h1");
const controller = new ScrollMagic.Controller();
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
        duration: 600,
        triggerElement: intro,
        triggerHook: 0
      })
        .setTween(textAnim8)
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
  
  //const o = document.querySelector('.o');
  //const t = document.querySelector('.t');
  //const tr = document.querySelector('.tr');

  const fblockpco = document.querySelector('.fblockpco');
  const fblockpct = document.querySelector('.fblockpct');
  const fblockpctr = document.querySelector('.fblockpctr');

  const imageo = document.querySelector('.imageo');
  const imaget = document.querySelector('.imaget');
  const imagetr = document.querySelector('.imagetr');

  const timageo = document.querySelector('.timageo');
  const timaget = document.querySelector('.timaget');
  const timagetr = document.querySelector('.timagetr');

  const sblocko = document.querySelector('.sblocko');
  const sblockt = document.querySelector('.sblockt');
  const sblocktr = document.querySelector('.sblocktr');




  greenButton.addEventListener('click', function () {
    //o.style.zIndex = -1;
    //t.style.zIndex = -2;
    //tr.style.zIndex = -3;
      fblockpco.style.display = 'flex';
      fblockpct.style.display = 'none';
      fblockpctr.style.display = 'none';
      imageo.style.display = 'flex';
      imaget.style.display = 'none';
      imagetr.style.display = 'none';
      timageo.style.display = 'flex';
      timaget.style.display = 'none';
      timagetr.style.display = 'none';
      sblocko.style.display = 'flex';
      sblockt.style.display = 'none';
      sblocktr.style.display = 'none';

  });
  
  redButton.addEventListener('click', function () {
    //o.style.zIndex = -2;
    //t.style.zIndex = -1;
    //tr.style.zIndex = -3;
      fblockpco.style.display = 'none';
      fblockpct.style.display = 'flex';
      fblockpctr.style.display = 'none';
      imageo.style.display = 'none';
      imaget.style.display = 'flex';
      imagetr.style.display = 'none';
      timageo.style.display = 'none';
      timaget.style.display = 'flex';
      timagetr.style.display = 'none';
      sblocko.style.display = 'none';
      sblockt.style.display = 'flex';
      sblocktr.style.display = 'none';


  });
  
  blueButton.addEventListener('click', function () {
    //o.style.zIndex = -3;
    //t.style.zIndex = -2;
    //tr.style.zIndex = -1;
      fblockpco.style.display = 'none';
      fblockpct.style.display = 'none';
      fblockpctr.style.display = 'flex';
      imageo.style.display = 'none';
      imaget.style.display = 'none';
      imagetr.style.display = 'flex';
      timageo.style.display = 'none';
      timaget.style.display = 'none';
      timagetr.style.display = 'flex';
      sblocko.style.display = 'none';
      sblockt.style.display = 'none';
      sblocktr.style.display = 'flex';
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

