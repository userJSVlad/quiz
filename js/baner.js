/*  meni Interval*/
function changeBanner(banners, bannerStors) {
   banners = document.querySelector('.backimg');
   bannerStors = {
      'bannerOne': 'https://www.cpllearning.com/wp-content/uploads/2019/08/Quiz-Box-Thumbnail.jpg',
      'bannerTwo': "https://sun9-74.userapi.com/C4X8O7T0KttdkM3DdDtzYqsqxN_EPciUMnm2sQ/IiV4NQbvW_Q.jpg"
   }
   showFirstBanner(banners, bannerStors)
}

function showFirstBanner(banner, bannerStore) {
   if (banner.src === bannerStore.bannerOne) {
      setTimeout(() => {
         banner.src = "https://sun9-74.userapi.com/C4X8O7T0KttdkM3DdDtzYqsqxN_EPciUMnm2sQ/IiV4NQbvW_Q.jpg";
         showSecondBanner(banner, bannerStore)
      }, 15000);
   }
};

function showSecondBanner(banner, bannerStore) {
   if (banner.src === bannerStore.bannerTwo) {
      setTimeout(() => {
         banner.src = "https://www.cpllearning.com/wp-content/uploads/2019/08/Quiz-Box-Thumbnail.jpg"
         showFirstBanner(banner, bannerStore)
      }, 15000);
   }
}

changeBanner();

