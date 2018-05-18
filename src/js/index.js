document.addEventListener('DOMContentLoaded', () => {

    var context = {
        brand: 'J & K',
        nav: [
          { url: 'index.html', title: 'Home' },
          { url: 'index.html#story', title: 'Our Story' },
          { url: 'details.html', title: 'Details' },
          { url: 'people.html', title: 'People' },
          { url: 'guide.html', title: 'City Guide' },
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