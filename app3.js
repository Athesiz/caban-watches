document.addEventListener('DOMContentLoaded', function () {
  const greenButton = document.querySelector('.green');
  const redButton = document.querySelector('.red');
  const blueButton = document.querySelector('.blue');
  const o = document.querySelector('.o');
  const fblockpco = document.querySelector('.fblockpco');
  const tki = document.querySelector('.tki');
  const dvi = document.querySelector('.dvi');
  const dovgali = document.querySelector('.dovgali');
  
  greenButton.addEventListener('click', function () {
    if (window.innerWidth < 500) {
      o.src = 'Images/caban.mp4';
    fblockpco.src = 'Images/hg.jpeg';
    tki.src = 'Images/caban1.jpeg';
    dvi.src = 'Images/caban1.jpeg';
   dovgali.src = 'Images/dowgal.jpeg';
    } 
    else {
      o.src = 'Images/caban.mp4';
      fblockpco.src = 'Images/caban1.jpeg';
      tki.src = 'Images/caban1.jpeg';
      dvi.src = 'Images/dv.jpeg';
      dovgali.src = 'Images/dowgal.jpeg';
}});
  
  redButton.addEventListener('click', function () {
    if (window.innerWidth < 500) {
      o.src = 'Images/caban1.mov';
      fblockpco.src = 'Images/hg.jpeg';
      tki.src = 'Images/22.jpeg';
      dvi.src = 'Images/dowga.jpeg';
      dovgali.src = 'Images/dowgal.jpeg';
          } 
    else {
      o.src = 'Images/caban1.mov';
      fblockpco.src = 'Images/horizontal.png';
      tki.src = 'Images/22.jpeg';
      dvi.src = 'Images/dowga.jpeg';
      dovgali.src = 'Images/dowgal.jpeg';
        }});
  
  blueButton.addEventListener('click', function () {
    if (window.innerWidth < 500) {
      o.src = 'Images/caban2.mov';
      fblockpco.src = 'Images/33.jpeg';
      tki.src = 'Images/33.jpeg';
      dvi.src = 'Images/dowga.jpeg';
      dovgali.src = 'Images/dv.jpeg';
          } 
    else {
      o.src = 'Images/caban2.mov';
      fblockpco.src = 'Images/33.jpeg';
      tki.src = 'Images/33.jpeg';
      dvi.src = 'Images/dowga.jpeg';
      dovgali.src = 'Images/dv.jpeg';
        }});
  redButton.click();
      });
      var bodyHeight = document.body.scrollHeight;

  
const texttt =  document.querySelector(".unit3");
const textt =  document.querySelector(".unit2");
const intro = document.querySelector(".intro");
const text = intro.querySelector("h1");
const controller = new ScrollMagic.Controller();
const rectangle = document.querySelector(".rectangl");
var realHeight = document.documentElement.clientHeight;

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
      duration: realHeight*1.3,
      triggerElement: intro,
      triggerHook: 0
    })
      .setTween(textAnim7)
      .addTo(controller);

      const fblock = document.querySelector(".fblock");

      var distanceFromTop = fblock.getBoundingClientRect().bottom;
      
      var divElement = document.querySelector('div.tk');
      
      divElement.style.top = distanceFromTop + 'px';

      
     
          const fbt = document.querySelector('.fbt');

              const fbtanimation = TweenMax.fromTo(fbt, 3, { marginTop: '35vh', opacity: 0 }, { marginTop: '5vh', opacity: 1 });

              let scene01 = new ScrollMagic.Scene({
                duration: realHeight * 0.2,
                triggerElement: fblock,
                triggerHook: 0
              })
              .setTween(fbtanimation)
              .addTo(controller);
          
              const sbt = document.querySelector('.colors');
              const sbtanimation = TweenMax.fromTo(sbt, 3, { marginTop: '35vh', opacity: 0 }, { marginTop: '5vh', opacity: 1 });

              let scene21 = new ScrollMagic.Scene({
                duration: realHeight * 0.2,
                triggerElement: fblock,
                triggerHook: 0
              })
              .setTween(sbtanimation)
              .addTo(controller);
          

              const tk = document.querySelector(".tk");
              const ssbt = document.querySelector(".ssbt");
              
              const ssbtAnimation = TweenMax.fromTo(ssbt, 3, { marginTop: '15vh', opacity: 0 }, { marginTop: '5vh', opacity: 1});
    
              let scene11 = new ScrollMagic.Scene({
                duration: realHeight * 0.5,
                triggerElement: tk,
                triggerHook: 0
              })
              .setTween(ssbtAnimation)
              .addTo(controller);
          
              var h2Element = document.querySelector('h2.ssbt');

              var distanceFromTop = h2Element.getBoundingClientRect().bottom;

              var divElement = document.querySelector('div.lhv');

              divElement.style.top = distanceFromTop + 'px';

              const lhv = document.querySelector(".lhv");
              const dv = document.querySelector('.dv');
              const dvAnimation = TweenMax.fromTo(dv, 3, { marginTop: '15vh', opacity: 0 }, { marginTop: '5vh', opacity: 1 });
    
              let scene13 = new ScrollMagic.Scene({
                duration: realHeight * 0.2,
                triggerElement: lhv,
                triggerHook: 0
              })
              .setTween(dvAnimation)
              .addTo(controller);
          
              var lhvElement = document.querySelector('div.lhv');

              var distanceFromTop = lhvElement.getBoundingClientRect().bottom;

              var divElementdovga = document.querySelector('div.dovga');

              divElementdovga.style.top = distanceFromTop + 'px';



              const dov = document.querySelector('.dov');
              
                  const dovAnimation = TweenMax.fromTo(dov, 1, { marginTop: '15vh', opacity: 0 }, { marginTop: '5vh', opacity: 1 });
        
                  let scene61 = new ScrollMagic.Scene({
                    duration: realHeight * 0.5,
                    triggerElement: lhv,
                    triggerHook: 0
                  })
                  .setTween(dovAnimation)
                  .addTo(controller);
             
                  document.querySelector('.basement').style.transform = 'translate(0%, ' + newVerticalTranslation5 + 'px)';
                
          
      

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;

  // Adjust the translateY property based on the scroll position
  text.style.transform = `translateY(-${scrollY * 0.5}px)`;
  texttt.style.transform = `translateY(-${scrollY * 0.5}px)`;
});


   


