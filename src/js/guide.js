document.addEventListener('DOMContentLoaded', function() {
    var detailsContext, ceremonyContext, receptionContext;

    renderNav();

    guideContext = {
        pageClass: 'guide',
        displayTitle: 'Guide',
    };

    document.getElementById('main-header').innerHTML = 
        MyApp.templates.pageHeader(guideContext);

});