$(document).ready(function () {
    $('a[href^="#"]').click(function () {

        var idSecao = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(idSecao).offset().top - 60
        }, 'slow');

        return false;
    });
});