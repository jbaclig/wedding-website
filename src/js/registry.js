document.addEventListener('DOMContentLoaded', function() {
    var registryContext;

    renderNav();

    detailsContext = {
        pageClass: 'registry',
        displayTitle: 'Registry',
    };

    document.getElementById('main-header').innerHTML = 
        MyApp.templates.pageHeader(detailsContext);
});