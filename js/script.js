var elementosDuvida = document.querySelectorAll('.duvida')
var eleentosAtivos =document.querySelector('.duvida.ativo')

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function() {
        duvida.classList.toggle('ativo')

    })
})

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-hamburguer");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("ativo");
    });
});