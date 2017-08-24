// document.addEventListener('DomContentLoaded', function(){
// Dopisanie eventu "DomContentLoaded" powoduje, że slider nie wyświetla się na stronie
//(skrypt w pliku HTML umieszczony był w elemencie <head>, a następnie został przeniesiony
//na koniec <body>).

  var buttonNext = document.querySelector('#nextPicture');
  var buttonPrev = document.querySelector('#prevPicture');
  var list = document.querySelectorAll('li');
  var index = 0;

    list[index].classList.add("visible");

    buttonNext.addEventListener('click', function(){
        list[index].classList.toggle("visible");
        index++;
      if (index >= list.length) {
        index = 0;
      }
        list[index].classList.toggle("visible");
    });


    buttonPrev.addEventListener('click', function(){
      list[index].classList.toggle("visible");
      index--;
      if (index < 0) {
        index = list.length - 1;
      }
        list[index].classList.toggle("visible");
    });

// });
