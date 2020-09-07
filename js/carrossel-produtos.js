(function () {

    if (!window.matchMedia('(max-width: 800px)').matches) {

        var produtos = document.querySelectorAll('.produto');

        produtos.forEach(function (produto) {
            produto.classList.toggle("oculto");
        });

        var exibido = 0;

        produtos[exibido].classList.toggle("oculto");

        var setaDireita = document.querySelector('#seta-carrossel-dir');

        setaDireita.addEventListener("click", function () {
            produtos[exibido].classList.toggle("oculto");
            exibido++;

            if (exibido >= produtos.length) {
                exibido = 0;
            }

            produtos[exibido].classList.toggle("oculto");
        });

        var setaEsquerda = document.querySelector('#seta-carrossel-esq');

        setaEsquerda.addEventListener("click", function () {
            produtos[exibido].classList.toggle("oculto");
            exibido--;

            if (exibido < 0) {
                exibido = produtos.length - 1;
            }

            produtos[exibido].classList.toggle("oculto");
        });
    }
}());