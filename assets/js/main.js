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
  
  // nice select
  if (document.querySelectorAll("select").length > 0) {
    $('select').niceSelect();
  }

  // Popup
  $(".varea a,.popupVideoShow").on('click', function(e) {
    e.preventDefault();
    const target = e.target
    $("#video-popup-overlay,#video-popup-iframe-container,#video-popup-container,#video-popup-close").show();
    
    var url= target.href+'?autoplay=1';
    console.log(url)
     
    $("#video-popup-iframe").attr('src', url);
    
    $("#video-popup-iframe").on('load', function() {
      $("#video-popup-container").show();
    });
  });
  
  $("#video-popup-close, #video-popup-overlay").on('click', function(e) {
    $("#video-popup-iframe-container,#video-popup-container,#video-popup-close,#video-popup-overlay").hide();
    $("#video-popup-iframe").attr('src', '');
  });
 
})(jQuery);
