var acervo = new Acervo();

$(document).ready(function () {
    alert("Nesta aula, a implementação está no botão de cadastro que vai aparecer no canto superior direito!");

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

    $('#btnLogin').click(abrirPopupLogin);
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
        fechaPopup("popup");
    });

    $("#btnClose, #imgLogoPopup").click(function () {
        fechaPopup("popup");
    });
}

function fechaPopup(target) {

    switch (target) {
        case "popup":
            $("#popup").css("display", "none");
            $("body").css("overflow", "auto");
            $("#iframeTrailer").attr("src", " ");
            break;

        case "btnFecharLogin":
            $("#popupLogin").css("display", "none");
            $("body").css("overflow", "auto");
            break;

        default:

    }

}

function abrirPopupLogin() {
    $("#popupLogin").css("display", "flex");
    $("body").css("overflow", "hidden");

    $("#btnSubmit").click(function () {

        if ($("#inputDataNasc").val() == "") {
            alert("É necessário preencher o campo Data de Nasc corretamente para prosseguir!");
        } else {
            confirmarDadosCadastrais();
        }

    });

    $("#btnFecharLogin").click(function () {
        fechaPopup("btnFecharLogin");
    });
}

function confirmarDadosCadastrais() {
    var IsMaioridade = isMaioridade();
    if (!IsMaioridade) {
        alert("Detectamos que você é menor de idade, cadastros só são permitidos a pessoas maiores de idade!");
    } else {
        alert("Cadastro realizado com sucesso!");
    }
}

function isMaioridade() {
    var dataNasc = new Date(normalizarDataNasc($("#inputDataNasc").val()));
    var dataAtual = new Date(obterDataAtual());

    var diferenca = (dataAtual - dataNasc) / 1000 / 60 / 60 / 24;
    if (diferenca < 6574) {
        return false;
    }

    return true;
}

function normalizarDataNasc(data) {
    var data = data.split("-");
    var dataNormalizada = new Date();
    dataNormalizada = data[1] + '/' + data[2] + '/' + data[0];
    return dataNormalizada;
}

function obterDataAtual() {
    var atual = new Date();
    var dd = String(atual.getDate()).padStart(2, '0');
    var mm = String(atual.getMonth() + 1).padStart(2, '0');
    var aaaa = atual.getFullYear();

    atual = mm + '/' + dd + '/' + aaaa;
    return atual;
}



