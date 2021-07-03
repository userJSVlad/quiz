function showBlockGame(beginQuiz, blockStart, links) {
   beginQuiz = document.querySelector('.previos__block');
   blockStart = document.querySelector('.previos__start');
   links = {
      'src1': 'https://st4.depositphotos.com/1007566/24937/v/950/depositphotos_249373078-stock-illustration-laboratory-tool-science.jpg',
      'src2': 'https://leverageedu.com/blog/pu/wp-content/uploads/sites/3/2020/04/basic-chemistry.png',
   }

   beginQuiz.addEventListener('mouseover', hideElements)
   blockStart.addEventListener('mouseout', lightBlock)

   function hideElements() {
      startQuiz(beginQuiz, blockStart, links);
   }

   function lightBlock() {
      getInfo(beginQuiz, blockStart);
   }
}

let getInfo = (hideBlock, lightBlock) => lightBlock.style.opacity = 0;

let startQuiz = (hideBlock, lightBlock, links) => {
   lightBlock.style.opacity = 1;
   clickButton(links);
}

let clickButton = (imgs) => {
   let button = document.querySelector('.previos__game-click');
   let blockImg = document.querySelector('.previos__game-img')

   let hideImg = event => blockImg.src = imgs.src1

   function showImg(event) {
      event.preventDefault();
      blockImg.src = imgs.src2
   }
   button.addEventListener('mouseover', showImg);
   button.addEventListener('mouseout', hideImg)
}

function startGame() { // отключаем обнавление страницы при нажатиии на кнопку
   let button = document.querySelector('.previos__game-click');

   let clickButton = event => event.preventDefault();

   button.addEventListener('click', clickButton)
}

startGame()
showBlockGame();