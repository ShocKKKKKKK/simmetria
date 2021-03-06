$(function () {
  $(".header__bg-slider").slick({
    dots: !0,
    appendDots: $(".dots-inner"),
    infinite: !0,
    speed: 1500,
    fade: !0,
    cssEase: "linear",
    arrows: !1,
    autoplay: !0,
    autoplaySpeed: 5e3
  }), $(window).scroll(function () {
    $(this).scrollTop() >= window.innerHeight / 2 ? $(".header-top__inner").addClass("scrolled") : $(".header-top__inner").removeClass("scrolled")
  }), $(window).scroll(function () {
    $(this).scrollTop() >= window.innerHeight / 2 ? $(".header__adaptive").addClass("swiped") : $(".header__adaptive").removeClass("swiped")
  }), $(".header-top__menu, .header__text-inner").on("click", "a", function (e) {
    e.preventDefault();
    var i = $(this).attr("href"),
      n = $(i).offset().top;
    $("body,html").animate({
      scrollTop: n
    }, 1e3)
  }), new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 300,
    mobile: !1,
    live: !0,
    callback: function (e) {},
    scrollContainer: null
  }).init(), $(".video__popup-link").magnificPopup({
    type: "inline",
    alignTop: !1
  }), $(".video__slider").slick({
    centerMode: !1,
    slidesToShow: 3,
    infinite: !0,
    speed: 300,
    centerMode: !0,
    variableWidth: !0,
    arrows: !0
  }), $(".lifein__gallery").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !1,
    fade: !0,
    autoplay: !0,
    autoplaySpeed: 3e3,
    asNavFor: ".lifein__nav"
  }), $(".lifein__nav").slick({
    rows: "0",
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".lifein__gallery",
    dots: !1,
    centerMode: !0,
    focusOnSelect: !0,
    appendArrows: $(".lifein__gallery")
  });
  var n = document.getElementById("signup__bg");

  function e() {
    var e = n.getBoundingClientRect(),
      i = .3 * (e.y + e.height / 2 - window.innerHeight / 2) - 100;
    n.style.backgroundPositionY = i + "px"
  }
  window.addEventListener("scroll", e), window.addEventListener("resize", e), e(), $(".header__adaptive-burger-button").click(function () {
    $(this).toggleClass("open"), $(".header__adaptive-menu").toggleClass("active")
  })
});