this["MyApp"] = this["MyApp"] || {};
this["MyApp"]["templates"] = this["MyApp"]["templates"] || {};
this["MyApp"]["templates"]["details"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<header>\n    <h3>"
    + alias4(((helper = (helper = helpers.eventName || (depth0 != null ? depth0.eventName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eventName","hash":{},"data":data}) : helper)))
    + "</h3>\n    <h4 class=\"text-muted\">"
    + alias4(((helper = (helper = helpers.eventTime || (depth0 != null ? depth0.eventTime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"eventTime","hash":{},"data":data}) : helper)))
    + "</h4>\n</header>\n<p>\n    <strong>"
    + alias4(((helper = (helper = helpers.locationName || (depth0 != null ? depth0.locationName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"locationName","hash":{},"data":data}) : helper)))
    + "</strong><br>\n    <a href="
    + alias4(((helper = (helper = helpers.mapLink || (depth0 != null ? depth0.mapLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mapLink","hash":{},"data":data}) : helper)))
    + " target=\"_blank\">\n        "
    + alias4(((helper = (helper = helpers.addressLine1 || (depth0 != null ? depth0.addressLine1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addressLine1","hash":{},"data":data}) : helper)))
    + "<br>\n        "
    + alias4(((helper = (helper = helpers.addressLine2 || (depth0 != null ? depth0.addressLine2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addressLine2","hash":{},"data":data}) : helper)))
    + "\n    </a>\n</p>\n"
    + ((stack1 = ((helper = (helper = helpers.map || (depth0 != null ? depth0.map : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"map","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n<p>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n<p><em>"
    + alias4(((helper = (helper = helpers.details1 || (depth0 != null ? depth0.details1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"details1","hash":{},"data":data}) : helper)))
    + ((stack1 = ((helper = (helper = helpers.detailsLink || (depth0 != null ? depth0.detailsLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"detailsLink","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + alias4(((helper = (helper = helpers.details2 || (depth0 != null ? depth0.details2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"details2","hash":{},"data":data}) : helper)))
    + "</em></p>\n";
},"useData":true});
this["MyApp"]["templates"]["nav"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <a class=\"nav-link\" href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "<nav class=\"navbar navbar-expand-lg navbar-custom transparent navbar-light fixed-top py-0\">\n    <a class=\"navbar-brand font-fancy\" href=\"index.html\">"
    + container.escapeExpression(((helper = (helper = helpers.brand || (depth0 != null ? depth0.brand : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"brand","hash":{},"data":data}) : helper)))
    + "</a>\n    <button class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <i class=\"fas fa-ellipsis-h\"></i>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n"
    + ((stack1 = (helpers.navigation || (depth0 && depth0.navigation) || alias2).call(alias1,(depth0 != null ? depth0.nav : depth0),{"name":"navigation","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</nav>";
},"useData":true});
this["MyApp"]["templates"]["pageHeader"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"jumbotron jumbotron-fluid page "
    + alias4(((helper = (helper = helpers.pageClass || (depth0 != null ? depth0.pageClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageClass","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"container-fluid\">\n        <div class=\"overlay\">\n            <h1 class=\"display-1 font-fancy text-white\">\n                "
    + alias4(((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayTitle","hash":{},"data":data}) : helper)))
    + "\n            </h1>\n        </div>\n    </div>\n</div>";
},"useData":true});
this["MyApp"]["templates"]["test"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h1>\n    Hello, my name is "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "!  I am a "
    + alias4(((helper = (helper = helpers.job || (depth0 != null ? depth0.job : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"job","hash":{},"data":data}) : helper)))
    + ".\n</h1>";
},"useData":true});