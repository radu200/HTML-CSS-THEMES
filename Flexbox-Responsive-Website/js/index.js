$(document).ready(function() {
  $(".toggle").on("click", function() {
    $(".toggle").parent().toggleClass('active');
  });
  $(".owl-carousel").owlCarousel({
    items: 4,
    loop: Infinity,
    autoplay: true,
    margin: 10,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },

      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });

});
