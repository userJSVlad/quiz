/* fixed menu */
function createixedMenu() {
   let header = document.querySelector('.header');
   let bloksBorder = document.querySelectorAll('.bloks__border')
   window.addEventListener('scroll', fisedOurHeader)

   function fisedOurHeader() {
      let headerHeight = header.offsetHeight / 2;
      let scrollTop = window.scrollY;

      if (scrollTop >= headerHeight) {
         header.classList.add('_fixed');
      } else {
         header.classList.remove('_fixed');
      }
   }
}
function scrollBoks() {
   let bloksBorder = document.querySelectorAll('.bloks__border')
   window.addEventListener('scroll', scrollBoxs)
   function scrollBoxs() {
      let windowCenter = window.innerHeight + window.scrollY;
      bloksBorder.forEach(element => {
         let scrollOffset = element.offsetTop + element.offsetHeight;
         if (windowCenter >= scrollOffset) {
            element.classList.add('animation')
         } else {
            element.classList.remove('animation')
         }
      })
   }
}

/*  scriollTop */
let scrollLogo = (logo) => {
   logo = document.querySelector('.header__logo')
   logo.addEventListener('click', function () {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   });
}

scrollLogo();
createixedMenu();
scrollBoks();



