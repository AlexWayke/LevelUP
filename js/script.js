const toBottomBtns = $(".btn-to-form");
toBottomBtns.click(function() {
    $('html, body').animate({
    scrollTop: $(".buy-form").offset().top
    }, 1000); // Скорость прокрутки
});