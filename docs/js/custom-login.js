// JavaScript Document
$(document).ready(function($) {

  //-- Promo messages slider
  if ( $('.login-slider').length != 0 )
  {
    $('.login-slider').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1400,
      fade: true,
      infinite: true,
      arrows: false
    });
  };

});