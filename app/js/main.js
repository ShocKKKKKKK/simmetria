$(function () {
  $('.work__slider-left').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    fade: true,
    asNavFor: '.work__preview-left',

  });
  $('.work__preview-left').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.work__slider-left',
    centerMode: true,
    focusOnSelect: true,
  });
  $('.work__slider-right').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    fade: true,
    asNavFor: '.work__preview-right',

  });
  $('.work__preview-right').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.work__slider-right',
    centerMode: true,
    focusOnSelect: true,
  });

});