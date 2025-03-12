var elementosDuvida = document.querySelectorAll('.duvida')
var eleentosAtivos =document.querySelector('.duvida.ativo')

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function() {
        duvida.classList.toggle('ativo')

    })
})

