Handlebars.registerHelper('navigation', function(context, options) {
    var ret = '<ul class="navbar-nav ml-auto mt-2 mt-lg-0">';
  
    for(var i=0, j=context.length; i<j; i++) {
        ret = ret + '<li class="nav-item">' + options.fn(context[i]) + '</li>';
    }
  
    return ret + '</ul>';
});