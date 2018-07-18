document.addEventListener('DOMContentLoaded', function() {
    var registryContext;

    renderNav();

    registryContext = {
        pageClass: 'registry',
        displayTitle: 'Registry',
    };

    document.getElementById('main-header').innerHTML = 
        MyApp.templates.pageHeader(registryContext);
});