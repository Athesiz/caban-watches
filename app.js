
document.addEventListener('DOMContentLoaded', function () {
  const tagol = document.querySelector('.tagol');
  const imgpc = document.querySelector('.imgpc');
  const imgpc2 = document.querySelector('.imgpc2');
  const imgpc3 = document.querySelector('.imgpc3');
  const imgpc4 = document.querySelector('.imgpc4');
  const imgpc5 = document.querySelector('.imgpc5');
  if (window.innerWidth < 500) {
    tagol.src = 'Images/caban.mp4';  
    imgpc.src = 'Images/110500.jpeg';    
    imgpc2.src = 'Images/28250.jpeg';
    imgpc3.src = 'Images/110300.jpeg';
    imgpc4.src = 'Images/28250.jpeg';
    imgpc5.src = 'Images/19300(6).jpeg'; 
  } 
  else {
    tagol.src = 'Images/caban1.mov'; 
    imgpc.src = 'Images/f22.jpeg'; 
    imgpc2.src = 'Images/f22.jpeg'; 
    imgpc3.src = 'Images/f22.jpeg'; 
    imgpc4.src = 'Images/f22.jpeg'; 
    imgpc5.src = 'Images/f22.jpeg'; 
  }});

  var gridElement = document.querySelector('.grid');

  var height = gridElement.offsetHeight;

  window.addEventListener('scroll', function () {
    if (window.scrollY > (400+height+realHeight*5)) {
        window.scrollTo(0, (400+height+realHeight*5)); 
    }
});

const navbarController = new ScrollMagic.Controller();

const pinNavbarScene = new ScrollMagic.Scene({
  triggerElement: ".navbar",
  triggerHook: 0,
  duration: 0, 
})
  .setPin(".navbar")
  .addTo(navbarController);

  const controller = new ScrollMagic.Controller();
  

  
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


var realHeight = document.documentElement.clientHeight;
var newVerticalTranslation5 = 0;
    document.querySelector('.catalog1 img').style.transform = 'translate(0%, ' + newVerticalTranslation5 + 'px)';
    document.querySelector('.lng-sbi').style.transform = 'translate(0%, ' + newVerticalTranslation5 + 'px)';

  var newVerticalTranslation = -realHeight*4;
  document.querySelector('.catalog2 img').style.transform = 'translate(0%, ' + newVerticalTranslation + 'px)';
  document.querySelector('.lng-tbi').style.transform = 'translate(0%, ' + newVerticalTranslation + 'px)';

  var newVerticalTranslation2 = -realHeight*7;
  document.querySelector('.catalog3 img').style.transform = 'translate(0%, ' + newVerticalTranslation2 + 'px)';
  document.querySelector('.lng-4bi').style.transform = 'translate(0%, ' + newVerticalTranslation2 + 'px)';
  
  
  var newVerticalTranslation4 = -realHeight*9;
  document.querySelector('.catalog4 img').style.transform = 'translate(0%, ' + newVerticalTranslation4 + 'px)';
  document.querySelector('.lng-5bi').style.transform = 'translate(0%, ' + newVerticalTranslation4 + 'px)';

  var newVerticalTranslation6 = -realHeight*10;
  document.querySelector('.catalog5 img').style.transform = 'translate(0%, ' + newVerticalTranslation6 + 'px)';
  document.querySelector('.lng-6bi').style.transform = 'translate(0%, ' + newVerticalTranslation6 + 'px)';

  
  var newVerticalTranslation8 = -(realHeight * 5);
  document.querySelector('.grid').style.transform = 'translate(0%, ' + newVerticalTranslation8 + 'px)';


  

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
        
          duration: realHeight,
          triggerElement: catalog1,
          triggerHook: 0
        })
          .setPin(fibi)
          .setPin(catalog4)
          .addTo(controller);
            




window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  const rotation = (scrollPosition / (400+height+realHeight*5)) * 360;

  document.querySelector(".hand").style.transform = `rotate(${rotation}deg)`;
});

