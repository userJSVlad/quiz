/*  newsliker */
function createAllFacts() {
   let storeBoxsInfo = {
      newsOne: {
         'newsTitl': 'Однажды сенатором Рима стал... конь',
         'newsImg': 'https://tn.fishki.net/26/upload/post/2019/09/26/3098184/98bfb9e612877d0ce9c3eb8c7bc19779.jpg',
         'newsText': '27 августа 1896 года между Англией и Занзибаром вспыхнула война. Она началась после революционного переворота в султанате, и продлилась от 38 до 45 минут. В ходе конфликта погибло 570 занзибарцев, а в британской армии был ранен лишь один солдат.',
      },
      newsTwo: {
         'newsTitl': 'Новорожденные не могут плакать слезами',
         'newsImg': 'https://tn.fishki.net/26/upload/post/2019/09/26/3098184/35f5c2aecf6a2b3e98550e8945adc155.jpg',
         'newsText': 'Новорожденные дети не могут плакать в полном смысле этого слова - со слезами. Первую слезу маленькие люди пускают в возрасте от 1 до 3 месяцев. Новорожденные же малыши кричат лишь для того, чтобы пожаловаться на что-то или привлечь внимание родителя.',
      },
      newsThree: {
         'newsTitl': 'Губительная печень полярного медведя',
         'newsImg': 'https://tn.fishki.net/26/upload/post/2019/09/26/3098184/130c509051cd30e7ee1a48dedfee9723.jpg',
         'newsText': 'Если человек съест от 30 до 90 граммов печени полярного медведя, есть большой риск смертельного отравления. Этот орган белого медведя содержит высокие дозы ретинола - такая концентрация губительна для человека. Наш организм получит смертельное количество витамина А.',
      }
   }

   let allTabButtons = document.querySelector('.tabs__buttons');
   let rightBlock = null;
   allTabButtons.addEventListener('click', makeButtonColor);

   function makeButtonColor(event) {
      let target = event.target;
      if (target.tageName = 'BUTTON')
         return getColorFronButton(target);
   }

   function clearBlackBackground() {
      let btn = allTabButtons.children[0];
      btn.classList.remove('color-black')
   }

   function getColorFronButton(targ) {
      if (rightBlock) {
         rightBlock.classList.remove('box__active')
      }
      rightBlock = targ;
      rightBlock.classList.add('box__active')
      clearBlackBackground();
      return transformInfo(rightBlock)
   }

   function transformInfo(info) {
      let titl = document.querySelector('.tabs__inner-titl');
      let img = document.querySelector('.tabs__ims');
      let text = document.querySelector('.tabs__texts');
      let newInfo = info.dataset.news

      if (newInfo === 'one') {
         titl.textContent = storeBoxsInfo.newsOne.newsTitl;
         img.src = storeBoxsInfo.newsOne.newsImg;
         text.textContent = storeBoxsInfo.newsOne.newsText;
      } else if (newInfo === 'two') {
         titl.textContent = storeBoxsInfo.newsTwo.newsTitl;
         img.src = storeBoxsInfo.newsTwo.newsImg;
         text.textContent = storeBoxsInfo.newsTwo.newsText;
      } else if (newInfo === 'three') {
         titl.textContent = storeBoxsInfo.newsThree.newsTitl;
         img.src = storeBoxsInfo.newsThree.newsImg;
         text.textContent = storeBoxsInfo.newsThree.newsText;
      }
   }
}
createAllFacts();
