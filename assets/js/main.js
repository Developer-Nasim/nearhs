(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');
    $('.menuShadow').toggleClass('show');
  }); 

    
  // All Speaches
  $(".allspeaches").owlCarousel({
    loop: true,
    margin: 30,
    items: 4,
    rtl: true,
    navText: [
      '<img src="assets/img/arrow-left.svg" alt="">',
      '<img src="assets/img/arrow-right.svg" alt="">'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 4
      }
    }
  });

    
  // All Articales
  $(".all-articales").owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    rtl: true,
    navText: [
      '<img src="assets/img/arrow-left.svg" alt="">',
      '<img src="assets/img/arrow-right.svg" alt="">'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  // Gallery
  $(".gallery-items").owlCarousel({
    loop: true,
    margin: 30,
    items: 3,
    rtl: true,
    stagePadding: 100,
    navText: [
      '<img src="assets/img/arrow-left.svg" alt="">',
      '<img src="assets/img/arrow-right.svg" alt="">'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        stagePadding: 20,
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
  

  // Popup
  $('.varea a,.popupVideoShow').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
});
 
})(jQuery);
