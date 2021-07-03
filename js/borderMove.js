/*  moveBackGround */
function makeMove() {
   let blokss = document.querySelector('.bloks__border').children[0];

   blokss.addEventListener('click', startMove())

   function startMove(blokElems, line) {
      line = document.querySelector('#block__line-elem');
      blokElems = 0;
      return function () {
         line.style.opacity = 1;
         moveBlock(blokElems, line);
      }
   }

   function moveBlock(block, row) {
      setInterval(getStart, 50)
      function getStart() {
         if (block > blokss.offsetWidth - 35) {
            row.style.opacity = 0;
            return
         }
         row.style.left = block + 'px'
         block += 10
         console.log(block);
         return block;
      }
   }

   let counter = startMove();
}

makeMove();
