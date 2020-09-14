$(document).ready(function () {

    $('a[href^="#"]').click(function () {

        var idSecao = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(idSecao).offset().top - 100
        }, 'slow');

        return false;
    });
});

