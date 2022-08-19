const toBottomBtns = $(".btn-to-form");
toBottomBtns.click(function() { // ID откуда кливаем
    $('html, body').animate({
    scrollTop: $(".buy-form").offset().top // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
   });