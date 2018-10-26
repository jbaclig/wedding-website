Handlebars.registerHelper('navigation', function(context, options) {
    var ret = '<ul class="navbar-nav ml-auto mt-2 mt-lg-0"><li class="nav-item rsvp"><a class="nav-link" href="https://rsvp.jkbaclig.com" target="_blank">RSVP</a></li>';
  
    for(var i=0, j=context.length; i<j; i++) {
        ret = ret + '<li class="nav-item">' + options.fn(context[i]) + '</li>';
    }
  
    return ret + '</ul>';
});