document.addEventListener('DOMContentLoaded', () => {

    let navbar = document.querySelector('.navbar');
    document.addEventListener('scroll', () => {
        if(window.scrollY === 0) {
            navbar.classList.add('transparent');
        }
        else {
            if(navbar.classList.contains('transparent')) {
                navbar.classList.remove('transparent');
            }
        }
    });
    

});