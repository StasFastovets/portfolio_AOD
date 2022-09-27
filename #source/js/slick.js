
$(document).ready(function () {
   $('.slider__body').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,         // включаем адаптивную высоту
   })
})