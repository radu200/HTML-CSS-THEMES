$(window).scroll(function() {
    if ($('.navbar').offset().top > 50) {
        $('.navbar-fixed-top').addClass('top-nav-collapse');
    } else {
        $('.navbar-fixed-top').removeClass('top-nav-collapse');
    }
});


$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

function checkSendEmailForm() {

    var error = "";

    if ($("#email").val() == "") {

        error += "The email field is required.<br>"

    }

    if ($("#subject").val() == "") {

        error += "The subject field is required.<br>"

    }

    if ($("#content").val() == "") {

        error += "The content field is required.<br>"

    }



    if (error != "") {

        $("#error").html('<div class="alert alert-danger" role="alert"><p><strong>There were error(s) in your form:</strong></p>' + error + '</div>');

    } else {

        sendEmail();

    }
}




}
