(function () {
    var navBar = document.getElementById('nav'); // colocar em cache
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) navBar.classList.add('corNav'); // > 0 ou outro valor desejado
        else navBar.classList.remove('corNav');
    });
})();



 
