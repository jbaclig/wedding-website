document.addEventListener('DOMContentLoaded', function() {
    var detailsContext, ceremonyContext, receptionContext;

    renderNav();

    peopleContext = {
        pageClass: 'people',
        displayTitle: 'People',
    };

    document.getElementById('main-header').innerHTML = 
        MyApp.templates.pageHeader(peopleContext);

});