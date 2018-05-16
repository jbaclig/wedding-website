document.addEventListener('DOMContentLoaded', () => {

    var context = {
        brand: 'J & K',
        nav: [
          { url: '#', title: 'Home' },
          { url: '#story', title: 'Our Story' },
          { url: '#', title: 'Details' },
          { url: '#', title: 'People' },
          { url: '#', title: 'City Guide' },
        ]
    };
    document.getElementById('navigation').innerHTML = MyApp.templates.nav(context);

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