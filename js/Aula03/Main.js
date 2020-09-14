var acervo = new Acervo();

$(document).ready(function () {
    $('a[href^="#"]').click(function () {

        var idSecao = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(idSecao).offset().top - 100
        }, 'slow');

        return false;
    });


    var qtdFilmes = 8;
    construirSecao(qtdFilmes);

    $('.btnDetalhes').click(function () {
        var filme = event.target.getAttribute("movieId");
        exibirDetalhesFilme(filme);
    });
});

function construirSecao(qtdFilmes) {

    for (var i = 1; i <= qtdFilmes; i++) {

        var filme = acervo.obterFilme(i.toString());
        var html = [];
        var linkTrailer = "https://www.youtube.com/watch/" + filme.linkTrailer;

        html.push(`<div class="col-md-3 divItemFilme">`);
        html.push(`<div class="itemFilme">`);
        html.push(`<img class="imgFilme" src="${filme.caminhoCapa}" />`);
        html.push(`<span>${filme.titulo}</span>`);
        html.push(`<div class="botoes">`);
        html.push(`<a movieId="${i}" class="btnDetalhes">Detalhes</a>`);
        html.push(`<a href="${linkTrailer}" target="_blank">Trailer</a>`);
        html.push(`</div>`);
        html.push(`</div>`);
        html = html.join("");
        $("#areaFilmes").append(html);
    }
}

function exibirDetalhesFilme(filme) {
    var filmeSelecionado = acervo.obterFilme(filme);
    $("#popup").css("display", "flex");
    $("body").css("overflow", "hidden");

    $('#imgCapaFilme').attr("src", filmeSelecionado.caminhoCapa);
    $('#titulo').text(filmeSelecionado.titulo);
    $('#genero').text(filmeSelecionado.genero);
    $('#duracao').text(filmeSelecionado.duracao);
    $('#lancamento').text(filmeSelecionado.lancamento);
    $('#direcao').text(filmeSelecionado.direcao);
    $('#elenco').text(filmeSelecionado.elenco);
    $('#sinopse').text(filmeSelecionado.sinopse);
    $('#iframeTrailer').attr("src", "https://www.youtube.com/embed/" + filmeSelecionado.linkTrailer);


    $("#popup").click(function () {
        var target = event.target.getAttribute("id");
        fechaPopup(target);
    });

    $("#btnClose, #imgLogoPopup").click(function () {
        fechaPopup("popup");
    });
}

function fechaPopup(target) {
    if (target == "popup") {
        $("#popup").css("display", "none");
        $("body").css("overflow", "auto");
        $("#iframeTrailer").attr("src", " ");
    }
}