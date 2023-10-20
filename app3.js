const texttt =  document.querySelector(".unit3");
const textt =  document.querySelector(".unit2");
const intro = document.querySelector(".intro");
const text = intro.querySelector("h1");
const section = document.querySelector("section");
const end = section.querySelector("h1");
const controller = new ScrollMagic.Controller();


let scene = new ScrollMagic.Scene({
  
  duration: 550,
  triggerElement: intro,
  triggerHook: 0
})


  .setPin(intro)
  .addTo(controller);

  const textAnim2 = TweenMax.fromTo(textt, 3, { opacity: 1 }, { opacity: 0 });

let scene3 = new ScrollMagic.Scene({
  duration: 300,
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

let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 200;
});

setInterval(() => {
  delay += (scrollpos - delay) * 0.1;

  video.currentTime = delay;
}, 33.3);




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
  
  
  const fblockpco = document.querySelector('.fblockpco');
  const fblockpct = document.querySelector('.fblockpct');
  const fblockpctr = document.querySelector('.fblockpctr');

  const introo = document.querySelector('.introo');
  const introt = document.querySelector('.introt');
  const introtr = document.querySelector('.introtr');
  
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
      fblockpco.style.display = 'flex';
      fblockpct.style.display = 'none';
      fblockpctr.style.display = 'none';
  });
  
  redButton.addEventListener('click', function () {
      fblockpco.style.display = 'none';
      fblockpct.style.display = 'flex';
      fblockpctr.style.display = 'none';
  });
  
  blueButton.addEventListener('click', function () {
      fblockpco.style.display = 'none';
      fblockpct.style.display = 'none';
      fblockpctr.style.display = 'flex';
  });

  greenButton.addEventListener('click', function () {
    introo.style.display = 'flex';
    introt.style.display = 'none';
    introtr.style.display = 'none';
});

redButton.addEventListener('click', function () {
    introo.style.display = 'none';
    introt.style.display = 'flex';
    introtr.style.display = 'none';
});

blueButton.addEventListener('click', function () {
    introo.style.display = 'none';
    introt.style.display = 'none';
    introtr.style.display = 'flex';
});

greenButton.addEventListener('click', function () {
  imageo.style.display = 'flex';
  imaget.style.display = 'none';
  imagetr.style.display = 'none';
});

redButton.addEventListener('click', function () {
  imageo.style.display = 'none';
  imaget.style.display = 'flex';
  imagetr.style.display = 'none';
});

blueButton.addEventListener('click', function () {
  imageo.style.display = 'none';
  imaget.style.display = 'none';
  imagetr.style.display = 'flex';
});

greenButton.addEventListener('click', function () {
  timageo.style.display = 'flex';
  timaget.style.display = 'none';
  timagetr.style.display = 'none';
});

redButton.addEventListener('click', function () {
  timageo.style.display = 'none';
  timaget.style.display = 'flex';
  timagetr.style.display = 'none';
});

blueButton.addEventListener('click', function () {
  timageo.style.display = 'none';
  timaget.style.display = 'none';
  timagetr.style.display = 'flex';
});

greenButton.addEventListener('click', function () {
  sblocko.style.display = 'flex';
  sblockt.style.display = 'none';
  sblocktr.style.display = 'none';
});

redButton.addEventListener('click', function () {
  sblocko.style.display = 'none';
  sblockt.style.display = 'flex';
  sblocktr.style.display = 'none';
});

blueButton.addEventListener('click', function () {
  timageo.style.display = 'none';
  timaget.style.display = 'none';
  timagetr.style.display = 'flex';
});


  greenButton.click();
  blueButton.click();
  redButton.click();
});



window.addEventListener("scroll", function () {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Calculate the rotation angle based on the scroll position
  const rotation = (scrollPosition / (document.documentElement.scrollHeight - window.innerHeight)) * 360;

  // Rotate the watch hand
  document.querySelector(".hand").style.transform = `rotate(${rotation}deg)`;
});
