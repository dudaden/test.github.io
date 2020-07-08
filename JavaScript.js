 // Когда пользователь прокручивает вниз 80px от верхней части документа, измените размер отступа навигационной панели и размер шрифта логотипа
 window.onscroll = function() {scrollFunction()};
      
 function scrollFunction() {
   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
     document.getElementById("navbar").style.padding = "4px 2px";
     document.getElementById("logo").style.fontSize = "30px";
   } else {
     document.getElementById("navbar").style.padding = "8px 5px";
     document.getElementById("logo").style.fontSize = "40px";
   }
 }
 