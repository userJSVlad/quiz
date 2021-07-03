
let offset = 0
function moveSlider(sliderLine) {
   sliderLine = document.querySelector('.slaider__line');
   let buttonRight = document.querySelector('.slide__right')
   let buttonLeft = document.querySelector('.slide__left')

   let makeMoveSlideRight = () => getNextRightSlid(sliderLine);
   let makeMoveSlideLeft = () => getNextLeftSlid(sliderLine);

   buttonLeft.addEventListener('click', makeMoveSlideLeft);
   buttonRight.addEventListener('click', makeMoveSlideRight);
}


let getNextLeftSlid = (liner) => {
   offset -= 700;
   if (offset < 0) {
      offset = 2100;
   }
   liner.style.left = -offset + 'px';
}

let getNextRightSlid = (liner) => {
   offset += 700;
   if (offset > 2100) {
      offset = 0;
   }
   liner.style.left = -offset + 'px';
}

moveSlider();

function maleLightBlock() {
   let slider = document.querySelector('.slaider');

   let showSlider = () => {
      let scrollTop = window.scrollY;
      let element = slider.offsetTop / 3;
      if (scrollTop >= element) {
         slider.style.opacity = 1;
      }
   }
   window.addEventListener('scroll', showSlider)

}

maleLightBlock()


/*
let count = 0;
let width;
function makeSlider(sliderLine) {
   const images = document.querySelectorAll('.slaider__line img');
   sliderLine = document.querySelector('.slaider__line');


   function init() {
      width = document.querySelector('.slaider__box').offsetWidth;
      sliderLine.style.width = width * images.length + 'px';
      images.forEach(item => {
         item.style.width = width + 'px';
         item.style.height = 'auto';
      })
   }
   window.addEventListener('resize', init)
   init();
}

makeSlider();
*/