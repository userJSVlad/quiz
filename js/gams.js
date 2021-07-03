function getGame() {
   let bloks = document.querySelectorAll('.blokcs__text');
   let fone = document.querySelectorAll('.blocks__img')

   let fons = {
      storeFirstFons: {
         'first': 'https://st4.depositphotos.com/1007566/24937/v/950/depositphotos_249373078-stock-illustration-laboratory-tool-science.jpg',
         'second': 'http://www.rewizor.ru/files/85547462p.jpg',
         'third': 'https://static.vecteezy.com/system/resources/previews/000/459/767/original/physics-science-flat-design-vector.jpg',
         'fourth': 'https://ds02.infourok.ru/uploads/ex/12e3/0005f2ca-6bdc9eca/img35.jpg',
      },
      storeSecondFons: {
         'first': 'https://st2.depositphotos.com/5934840/10984/v/950/depositphotos_109840976-stock-illustration-biology-design-lab-icon-flat.jpg',
         'second': 'https://avatars.mds.yandex.net/get-zen_doc/1654267/pub_5ebbcfd99138e30ae87fdbef_5ebbd1bce49ceb1a8333b628/scale_1200',
         'third': 'https://avatars.mds.yandex.net/get-zen_doc/52716/pub_59a77df5ad0f220c854115bc_59a785db7ddde85a63f015ce/scale_1200',
         'fourth': 'https://slovobooks.ru/upload/iblock/828/828df509e8716e96ee6967f95189f80f.jpg',
      }
   }

   bloks.forEach(element => {
      element.addEventListener('mouseover', changeFons)
      element.addEventListener('mouseout', baclFons)
   });

   function changeFons(event) {
      let target = event.target;
      if (target.dataset.element == 'one') {
         fone[0].src = fons.storeSecondFons.first
      }
      else if (target.dataset.element == 'two') {
         fone[1].src = fons.storeSecondFons.second
      }
      else if (target.dataset.element == 'tree') {
         fone[2].src = fons.storeSecondFons.third
      }
      else if (target.dataset.element == 'four') {
         fone[3].src = fons.storeSecondFons.fourth
      }
   }

   function baclFons(event) {
      let target = event.target;
      if (target.dataset.element == 'one') {
         fone[0].src = fons.storeFirstFons.first
      }
      else if (target.dataset.element == 'two') {
         fone[1].src = fons.storeFirstFons.second
      }
      else if (target.dataset.element == 'tree') {
         fone[2].src = fons.storeFirstFons.third
      }
      else if (target.dataset.element == 'four') {
         fone[3].src = fons.storeFirstFons.fourth
      }
   }

}

getGame();

