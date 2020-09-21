define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

Handlebars.registerPartial("component", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-title component-title\">\n            <div role=\"heading\" tabindex=\"0\" class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-title-inner component-title-inner\"  aria-level=\"4\">\n                "
    + ((stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"displayTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-body component-body\">\n            <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-body-inner component-body-inner\">\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-instruction component-instruction\">\n            <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-instruction-inner component-instruction-inner\">\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-header component-header\">\n    <div class=\""
    + alias4(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_component","hash":{},"data":data}) : helper)))
    + "-header-inner component-header-inner\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        \n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        \n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    </div>\n</div>\n";
},"useData":true}));

Handlebars.registerPartial("buttons", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "<button class=\"base button submit\">\n    <span>  \n        "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.submit : stack1), depth0)) != null ? stack1 : "")
    + " \n    </span>\n</button>\n<button class=\"base button reset\">\n    <span>\n        "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.reset : stack1), depth0)) != null ? stack1 : "")
    + " \n    </span>\n</button> \n<button class=\"base button model\">\n    <span> \n        "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.showCorrectAnswer : stack1), depth0)) != null ? stack1 : "")
    + " \n    </span>\n</button>\n<button class=\"base button user\">\n    <span>\n        "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.hideCorrectAnswer : stack1), depth0)) != null ? stack1 : "")
    + " \n    </span>\n</button>\n";
},"useData":true}));

Handlebars.registerPartial("state", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression;

  return "		<span tabindex=\"0\" role=\"region\" class=\"aria-label a11y-ignore-focus prevent-default\" id=\"buttons-aria-label-complete\">"
    + alias2((helpers.a11y_normalize || (depth0 && depth0.a11y_normalize) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"a11y_normalize","hash":{},"data":data}))
    + " "
    + alias2(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.complete : stack1), depth0))
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isQuestionType : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._canShowFeedback : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isCorrect : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.correct : stack1), depth0));
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incorrect : stack1), depth0));
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "		<span tabindex=\"0\" role=\"region\" class=\"aria-label a11y-ignore-focus prevent-default\" id=\"buttons-aria-label-incomplete\">"
    + alias1((helpers.a11y_normalize || (depth0 && depth0.a11y_normalize) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.displayTitle : depth0),{"name":"a11y_normalize","hash":{},"data":data}))
    + " "
    + alias1(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incomplete : stack1), depth0))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"accessibility-state\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isComplete : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true}));

this["Handlebars"]["templates"]["article"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <div class=\"article-title\">\n            <div role=\"heading\" tabindex=\"0\" class=\"article-title-inner h2\"  aria-level=\"2\">\n                "
    + ((stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"displayTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"article-body\">\n            <div class=\"article-body-inner\">\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"article-instruction\">\n            <div class=\"article-instruction-inner\">\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.instruction : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"article-inner block-container\">\n\n    <div class=\"article-header\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["block"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <div class=\"block-title\">\n            <div role=\"heading\" tabindex=\"0\" class=\"block-title-inner h3\"  aria-level=\"3\">\n                "
    + ((stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"displayTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"block-body\">\n            <div class=\"block-body-inner\">\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"block-instruction\">\n            <div class=\"block-instruction-inner\">\n                "
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.instruction : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"block-inner\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.instruction : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <div class=\"component-container\">\n    </div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["buttons"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"buttons-marking-icon icon display-none\">\n        </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"buttons-display\">\n        <div class=\"buttons-marking-icon icon display-none\">\n        </div>\n        <div class=\"buttons-display-inner\">\n        </div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "<div class=\"buttons-inner\">\n    <div class=\"buttons-cluster clearfix\">\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._shouldDisplayAttempts : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <button class=\"buttons-action\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._submit : stack1)) != null ? stack1.ariaLabel : stack1), depth0))
    + "\">"
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._submit : stack1)) != null ? stack1.buttonText : stack1), depth0)) != null ? stack1 : "")
    + "</button>\n        <button class=\"buttons-feedback\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._showFeedback : stack1)) != null ? stack1.ariaLabel : stack1), depth0))
    + "\" disabled=\"true\">"
    + ((stack1 = alias2(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._showFeedback : stack1)) != null ? stack1.buttonText : stack1), depth0)) != null ? stack1 : "")
    + "</button>\n    </div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._shouldDisplayAttempts : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["Handlebars"]["templates"]["drawer"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"drawer-inner\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.drawer : stack1), depth0))
    + "\">\n	<div class=\"drawer-toolbar clearfix\">\n		<div class=\"drawer-back-button\">\n		<button class=\"base drawer-back icon icon-controls-small-left\" role=\"button\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n		</button>\n		</div>\n		<div class=\"drawer-close-button\">\n		<button class=\"base drawer-close icon icon-cross\" role=\"button\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closeDrawer : stack1), depth0))
    + "\">\n		</button>\n		</div>\n	</div>\n	<div class=\"drawer-holder\">\n	</div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["drawerItem"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "<button class=\"base drawer-item-open "
    + container.escapeExpression(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"className","hash":{},"data":data}) : helper)))
    + "\">\n	<div class=\"drawer-item-title\">\n		<div class=\"drawer-item-title-inner h5\">"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n	</div>\n	<div class=\"drawer-item-description\">\n		<div class=\"drawer-item-description-inner\">"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias2).call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\n	</div>\n</button>";
},"useData":true});

this["Handlebars"]["templates"]["heading"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isOptional : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "            "
    + container.escapeExpression((helpers.compile || (depth0 && depth0.compile) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data}))
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isComplete : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "            "
    + alias1(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.complete : stack1), depth0))
    + " "
    + alias1((helpers.compile || (depth0 && depth0.compile) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data}))
    + "\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.escapeExpression;

  return "            "
    + alias1(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incomplete : stack1), depth0))
    + " "
    + alias1((helpers.compile || (depth0 && depth0.compile) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data}))
    + "\n        ";
},"9":function(container,depth0,helpers,partials,data) {
    return "        "
    + container.escapeExpression((helpers.compile || (depth0 && depth0.compile) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data}))
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return alias4(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data}) : helper)))
    + "\n<div id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "-heading\" class=\"js-heading-inner\" "
    + ((stack1 = (helpers.a11y_attrs_heading || (depth0 && depth0.a11y_attrs_heading) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),{"name":"a11y_attrs_heading","hash":{},"data":data})) != null ? stack1 : "")
    + " >\n    <span class=\"aria-label\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isA11yCompletionDescriptionEnabled : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "    </span>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["loading"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"loading\">\n    <div class=\"loader-gif\"><div role=\"heading\" tabindex=\"0\" class=\"h3\" aria-level=\"1\">Loading...</div></div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["navigation"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"navigation-inner clearfix\" role=\"navigation\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.navigation : stack1), depth0))
    + "\">\n    <button class=\"base navigation-back-button icon icon-controls-small-left\" data-event=\"backButton\" role=\"button\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\"></button>\n    <button class=\"base navigation-drawer-toggle-button icon icon-list\" data-event=\"toggleDrawer\" role=\"button\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.navigationDrawer : stack1), depth0))
    + "\"></button>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["notify"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "                    <div class=\"notify-popup-icon\">\n                        <div class=\"icon"
    + ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"prompt",{"name":"if_value_equals","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"alert",{"name":"if_value_equals","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n                        </div>\n                    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " icon-question";
},"4":function(container,depth0,helpers,partials,data) {
    return " icon-warning";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "                    <div class=\"notify-popup-title\">\n                        <div class=\"notify-popup-title-inner h5\" tabindex=\"0\" role=\"heading\" aria-level=\"1\">\n                        "
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n                        </div>\n                    </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <div class=\"notify-popup-body\">\n                        <div class=\"notify-popup-body-inner\">"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\n                    </div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "                    <div class=\"notify-popup-buttons\">\n                        <button class=\"notify-popup-button notify-popup-alert-button\" role=\"button\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.confirmText || (depth0 != null ? depth0.confirmText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.confirmText || (depth0 != null ? depth0.confirmText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"confirmText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</button>\n                    </div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <div class=\"notify-popup-buttons\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._prompts : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "                            <button class=\"notify-popup-button notify-popup-prompt-button\" data-event=\""
    + container.escapeExpression(((helper = (helper = helpers._callbackEvent || (depth0 != null ? depth0._callbackEvent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_callbackEvent","hash":{},"data":data}) : helper)))
    + "\" role=\"button\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.promptText || (depth0 != null ? depth0.promptText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">"
    + ((stack1 = ((helper = (helper = helpers.promptText || (depth0 != null ? depth0.promptText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"promptText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</button>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <button class=\"base notify-popup-done\" role=\"button\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\n                <div class=\"notify-popup-icon-close icon icon-cross\"></div>\n            </button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"notify-popup notify-type-"
    + alias4(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_type","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_classes","hash":{},"data":data}) : helper)))
    + "\" role=\"region\" aria-label=\""
    + alias4(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.feedbackPopUp : stack1), depth0))
    + "\">\n    <div class=\"notify-popup-inner\">\n        <div class=\"notify-popup-content\">\n            <div class=\"notify-popup-content-inner\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._showIcon : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"alert",{"name":"if_value_equals","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"prompt",{"name":"if_value_equals","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n"
    + ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || alias2).call(alias1,(depth0 != null ? depth0._type : depth0),"popup",{"name":"if_value_equals","hash":{},"fn":container.program(15, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>\n\n\n<div class=\"notify-shadow\"></div>\n";
},"useData":true});

this["Handlebars"]["templates"]["notifyPush"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing;

  return "<div class=\"notify-push-inner\" role=\"region\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.feedbackPopUp : stack1), depth0))
    + "\">\n	<div class=\"notify-push-title\">\n		<div class=\"notify-push-title-inner h5\" tabindex=\"0\" role=\"heading\" aria-level=\"1\">\n			"
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias4),(typeof helper === "function" ? helper.call(alias3,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n		</div>\n	</div>\n	<div class=\"notify-push-body\">\n		<div class=\"notify-push-body-inner\">\n			"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || alias4).call(alias3,(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n		</div>\n	</div>\n</div>\n<button class=\"base notify-push-close\" role=\"button\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\n	<span class=\"icon icon-cross\"></span>\n</button>\n";
},"useData":true});

this["Handlebars"]["templates"]["page"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "					    <div class=\"page-title\">\n					        <div class=\"page-title-inner h1\" tabindex=\"0\" role=\"heading\" aria-level=\"1\">\n					            "
    + ((stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"displayTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n					        </div>\n					    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					    <div class=\"page-body\">\n					        <div class=\"page-body-inner\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.pageBody : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "					        </div>\n					    </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					            	"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.pageBody : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "					            	"
    + ((stack1 = (helpers.a11y_text || (depth0 && depth0.a11y_text) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"a11y_text","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"page-inner article-container\" role=\"main\" aria-label=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.page : stack1), depth0))
    + "\">\n\n    	<div class=\"page-header\">\n    		<div class=\"page-header-inner clearfix\">\n\n    			<div class=\"page-header-content\">\n    				<div class=\"page-header-content-inner\">\n\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    				</div>\n    			</div>\n\n    		</div>\n    	</div>\n\n</div>\n<div class=\"aria-label relative a11y-ignore-focus prevent-default\" tabindex=\"0\" role=\"region\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.pageEnd : stack1), depth0))
    + "</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["shadow"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"shadow\" class=\"shadow display-none\"></div>";
},"useData":true});

this["Handlebars"]["templates"]["graphic"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " graphic-widget-attribution";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\"";
},"5":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"graphic-attribution\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "<div class=\"graphic-inner component-inner\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"graphic-widget component-widget"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n      <img src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" data-large=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.large : stack1), depth0))
    + "\" data-small=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.small : stack1), depth0))
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + " />\n    </div>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["media"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <button class=\"aria-label js-skip-to-transcript\" tabindex=\"-1\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._media : stack1)) != null ? stack1.skipToTranscript : stack1), depth0))
    + "\"></button>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.poster : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <audio src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.mp3 : stack1), depth0))
    + "\" type=\"audio/mp3\" style=\"width: 100%; height: 100%;\"/>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <img src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.poster : stack1), depth0))
    + "\" class=\"audio-poster\"/>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.ogg : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <audio src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.ogg : stack1), depth0))
    + "\" type=\"audio/ogg\" style=\"width: 100%; height: 100%;\"/>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "            <video aria-hidden=\"true\" preload=\"none\" width=\"640\" height=\"360\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._playsinline : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = (helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helpers.helperMissing).call(alias1,((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.type : stack1),"video/vimeo",{"name":"if_value_equals","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "")
    + " style=\"width:100%; height:100%;\" controls=\"controls\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.source : stack1),{"name":"if","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._useClosedCaptions : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </video>\n";
},"10":function(container,depth0,helpers,partials,data) {
    return "playsinline";
},"12":function(container,depth0,helpers,partials,data) {
    return "";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "poster=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.poster : stack1), depth0))
    + "\"";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                <source src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.source : stack1), depth0))
    + "\" type=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.type : stack1), depth0))
    + "\"/>\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.mp4 : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.ogv : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.webm : stack1),{"name":"if","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.mp4 : stack1), depth0))
    + "\" type=\"video/mp4\"/>\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.ogv : stack1), depth0))
    + "\" type=\"video/ogg\"/>\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <source src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.webm : stack1), depth0))
    + "\" type=\"video/webm\"/>\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.cc : stack1),{"name":"each","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"26":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <track kind=\"subtitles\" src=\""
    + alias4(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" type=\"text/vtt\" srclang=\""
    + alias4(((helper = (helper = helpers.srclang || (depth0 != null ? depth0.srclang : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"srclang","hash":{},"data":data}) : helper)))
    + "\" />\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <div class=\"media-transcript-container\">\n            <div class=\"media-transcript-button-container\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1._inlineTranscript : stack1),{"name":"if","hash":{},"fn":container.program(29, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1._externalTranscript : stack1),{"name":"if","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1._inlineTranscript : stack1),{"name":"if","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <button class=\"media-inline-transcript-button button\" aria-expanded=\"false\">\n                    <div class=\"transcript-text-container\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.inlineTranscriptButton : stack1),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.program(32, data, 0),"data":data})) != null ? stack1 : "")
    + "                    </div>\n                </button>\n";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.inlineTranscriptButton : stack1), depth0))
    + "\n";
},"32":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLink : stack1), depth0))
    + "\n";
},"34":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                <button onclick=\"window.open('"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLink : stack1), depth0))
    + "')\" class=\"media-external-transcript-button button\">\n                    <div class=\"transcript-text-container\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLinkButton : stack1),{"name":"if","hash":{},"fn":container.program(35, data, 0),"inverse":container.program(32, data, 0),"data":data})) != null ? stack1 : "")
    + "                    </div>\n                </button>\n";
},"35":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLinkButton : stack1), depth0))
    + "\n";
},"37":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                <div class=\"media-inline-transcript-body-container\" role=\"region\" aria-label=\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.inlineTranscriptButton : stack1),{"name":"if","hash":{},"fn":container.program(38, data, 0),"inverse":container.program(40, data, 0),"data":data})) != null ? stack1 : "")
    + "\">\n                    <div class=\"media-inline-transcript-body\">"
    + ((stack1 = (helpers.compile || (depth0 && depth0.compile) || helpers.helperMissing).call(alias1,((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.inlineTranscriptBody : stack1),{"name":"compile","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\n                </div>\n";
},"38":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.inlineTranscriptButton : stack1), depth0));
},"40":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLink : stack1), depth0));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data}) : helper)))
    + "\n<div class=\"media-inner component-inner\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = (helpers.any || (depth0 && depth0.any) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1._externalTranscript : stack1),((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1._inlineTranscript : stack1),{"name":"any","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"media-widget component-widget a11y-ignore-aria\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.mp3 : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "    </div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._transcript : depth0),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["narrative"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "narrative-text-controls";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "                <div class=\"narrative-content-item "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                    <div class=\"narrative-content-body\">\n                        <div class=\"narrative-content-body-inner\">\n                            "
    + ((stack1 = (helpers.compile || (depth0 && depth0.compile) || alias2).call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data})) != null ? stack1 : "")
    + "\n                        </div>\n                    </div>\n                </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "visited";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing;

  return "                    <div class=\"narrative-content-title\">\n                        <div class=\"narrative-content-title-inner\" "
    + container.escapeExpression((helpers.a11y_attrs_heading || (depth0 && depth0.a11y_attrs_heading) || alias2).call(alias1,"componentItem",{"name":"a11y_attrs_heading","hash":{},"data":data}))
    + ">\n                            "
    + ((stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n                        </div>\n                    </div>\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.a11y_aria_image || (depth0 && depth0.a11y_aria_image) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1),{"name":"a11y_aria_image","hash":{},"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                        <div class=\"narrative-progress component-item-color component-item-border "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"></div>\n";
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                    <button class=\"base narrative-strapline-title "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" aria-label=\""
    + ((stack1 = ((helper = (helper = helpers.strapline || (depth0 != null ? depth0.strapline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"strapline","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\" style=\"width: "
    + alias4(container.lambda((depths[1] != null ? depths[1]._itemWidth : depths[1]), depth0))
    + "%\" data-index=\""
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n                        <div class=\"narrative-strapline-title-inner h5\">\n                            "
    + ((stack1 = ((helper = (helper = helpers.strapline || (depth0 != null ? depth0.strapline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"strapline","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n                        </div>\n                        <div class=\"icon icon-plus\"></div>\n                        <div class=\"focus-rect\"></div>\n                    </button>\n";
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression;

  return "                <div class=\"narrative-slider-graphic "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" style=\"width: "
    + alias3(alias2((depths[1] != null ? depths[1]._itemWidth : depths[1]), depth0))
    + "%\" data-index=\""
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\">\n                    <img src=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-hidden=\"true\" />\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        <div class=\"graphic-attribution\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), depth0)) != null ? stack1 : "")
    + "</div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "                <div class=\"narrative-progress component-item-color component-item-border "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-index=\""
    + container.escapeExpression(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\"></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda, alias3=container.escapeExpression, alias4=helpers.helperMissing, alias5="function";

  return "<div class=\"narrative-inner component-inner\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"narrative-widget component-widget "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._hasNavigationInTextArea : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n\n        <div class=\"narrative-content\">\n            <div class=\"narrative-content-inner\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                <div class=\"narrative-controls-container clearfix\">\n                    <div class=\"narrative-indicators\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </div>\n                    <button class=\"base narrative-controls narrative-control-left\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n                        <div class=\"icon icon-controls-left\"></div>\n                    </button>\n                    <button class=\"base narrative-controls narrative-control-right\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\">\n                        <div class=\"icon icon-controls-right\"></div>\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"narrative-strapline\">\n            <div class=\"narrative-strapline-header\">\n                <div class=\"narrative-strapline-header-inner clearfix\" style=\"width: "
    + alias3(((helper = (helper = helpers._totalWidth || (depth0 != null ? depth0._totalWidth : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"_totalWidth","hash":{},"data":data}) : helper)))
    + "%\">\n                    <div></div>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n            </div>\n        </div>\n\n        <div class=\"narrative-slide-container\">\n\n            <button class=\"base narrative-controls narrative-control-left\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n                <div class=\"icon icon-controls-left\"></div>\n            </button>\n            <button class=\"base narrative-controls narrative-control-right\" aria-label=\""
    + alias3(alias2(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\">\n                <div class=\"icon icon-controls-right\"></div>\n            </button>\n\n            <div class=\"narrative-slider clearfix\" style=\"width: "
    + alias3(((helper = (helper = helpers._totalWidth || (depth0 != null ? depth0._totalWidth : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"_totalWidth","hash":{},"data":data}) : helper)))
    + "%\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n            <div class=\"narrative-indicators\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n\n        <div class=\"clearfix\"></div>\n\n    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["Handlebars"]["templates"]["text"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"text-inner component-inner\">\n"
    + ((stack1 = container.invokePartial(partials.component,depth0,{"name":"component","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});

this["Handlebars"]["templates"]["pageLevelProgress"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return alias3(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data}) : helper)))
    + "\n<div class=\"pagelevelprogress-inner\">\n    "
    + alias3((helpers.a11y_aria_label || (depth0 && depth0.a11y_aria_label) || alias2).call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.pageLevelProgress : stack1),{"name":"a11y_aria_label","hash":{},"data":data}))
    + "\n    <div role=\"list\" class=\"js-children\"></div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressIndicator"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "    <span class=\"aria-label\">\n        "
    + container.escapeExpression((helpers.compile || (depth0 && depth0.compile) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.ariaLabel : depth0),{"name":"compile","hash":{},"data":data}))
    + "\n    </span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return alias4(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data}) : helper)))
    + "\n<div class=\"pagelevelprogress-indicator-inner "
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "-indicator-inner\">\n    <div class=\"pagelevelprogress-indicator-bar\" style=\"width: "
    + alias4(((helper = (helper = helpers.percentageComplete || (depth0 != null ? depth0.percentageComplete : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"percentageComplete","hash":{},"data":data}) : helper)))
    + "%;\">\n    </div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.ariaLabel : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressItem"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.locked : stack1), depth0))
    + ". ";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.optionalContent : stack1), depth0))
    + ". ";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._isComplete : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.complete : stack1), depth0))
    + ". ";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incomplete : stack1), depth0))
    + ". ";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"page-level-progress-item-optional-text\">\n        "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.optionalContent : stack1), depth0))
    + "\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<button\n    class=\"base pagelevelprogress-item-title clearfix drawer-item-open"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._isVisible : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " js-indicator\"\n    data-pagelevelprogress-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\"\n    aria-label=\""
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._isVisible : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isOptional : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + alias3((helpers.compile || (depth0 && depth0.compile) || alias2).call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"compile","hash":{},"data":data}))
    + "\">\n    <div class=\"pagelevelprogress-item-title-inner\">\n    "
    + ((stack1 = (helpers.compile || (depth0 && depth0.compile) || alias2).call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"compile","hash":{},"data":data})) != null ? stack1 : "")
    + "\n    </div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isOptional : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</button>\n";
},"useData":true});

this["Handlebars"]["templates"]["pageLevelProgressNavigation"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return alias1(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"import_globals","hash":{},"data":data}) : helper)))
    + "\n<span class=\"tooltip\">"
    + alias1(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.progress : stack1), depth0))
    + "</span>\n";
},"useData":true});

this["Handlebars"]["templates"]["trickle-button"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " trickle-full-width";
},"3":function(container,depth0,helpers,partials,data) {
    return " locking";
},"5":function(container,depth0,helpers,partials,data) {
    return "display-none";
},"7":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"9":function(container,depth0,helpers,partials,data) {
    return " disabled=\"disabled\"";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.finalText : stack1),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.finalText : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.text : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._isStart : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.program(14, data, 0),"data":data})) != null ? stack1 : "");
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.startText : stack1),{"name":"if","hash":{},"fn":container.program(18, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"18":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                        "
    + ((stack1 = container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.startText : stack1), depth0)) != null ? stack1 : "")
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing;

  return "<div class=\"component "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._component : stack1), depth0))
    + "-component "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._component : stack1), depth0))
    + "-component-"
    + alias2(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias4),(typeof helper === "function" ? helper.call(alias3,{"name":"_id","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isFullWidth : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._className : stack1), depth0))
    + "\">\n    "
    + ((stack1 = (helpers.a11y_aria_label || (depth0 && depth0.a11y_aria_label) || alias4).call(alias3,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._trickle : stack1)) != null ? stack1.incompleteContent : stack1),{"name":"a11y_aria_label","hash":{},"data":data})) != null ? stack1 : "")
    + "\n    <div class=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._component : stack1), depth0))
    + "-inner component-inner"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isLocking : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers.unless.call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isVisible : stack1),{"name":"unless","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n        <button class=\"button "
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isDisabled : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\""
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1._isDisabled : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._isFinal : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(16, data, 0),"data":data})) != null ? stack1 : "")
    + "        </button>\n    </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["mobileFixes-narrativeMobile"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "        <div class=\"narrative-mobile-slide\">\n            <strong class=\"narrative-mobile-slide-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</strong>\n            <img class=\"narrative-mobile-slide-graphic\" src=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" alt=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\"/>\n            <div class=\"narrative-mobile-slide-body\">\n                "
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n<div class=\"narrative-mobile-widget\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0._items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"useData":true});

this["Handlebars"]["templates"]["speech-config"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"speech-config\">\n	<button class=\"speech-config-audio-toggle\"></button>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["speech"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"speech-container\">\n    <!-- block audio control -->\n    <div class=\"block-audio-control block-audio-control-"
    + container.escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n	    <button class=\"block-audio-button-listen\">\n	    	<i class=\"icon icon-speaker\"></i> "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0._TTS : depth0)) != null ? stack1._sectionPlayButtonText : stack1), depth0)) != null ? stack1 : "")
    + "\n		</button>\n	</div>\n</div>";
},"useData":true});

this["Handlebars"]["templates"]["boxmenu-item"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <img src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-hidden=\"true\" />\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression((helpers.a11y_aria_image || (depth0 && depth0.a11y_aria_image) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1),{"name":"a11y_aria_image","hash":{},"data":data}));
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "            <span class=\"menu-item-duration\">"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.durationLabel : stack1),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = ((helper = (helper = helpers.duration || (depth0 != null ? depth0.duration : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"duration","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.durationLabel : stack1), depth0)) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.visited : stack1), depth0));
},"10":function(container,depth0,helpers,partials,data) {
    return "visited";
},"12":function(container,depth0,helpers,partials,data) {
    return "disabled";
},"14":function(container,depth0,helpers,partials,data) {
    return "disabled=\"disabled\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return alias4(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data}) : helper)))
    + "\n<div class=\"menu-item-inner\">\n    <div class=\"menu-item-graphic\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n    <div class=\"menu-item-title\">\n        <div class=\"js-heading\" data-a11y-heading-type=\"menuItem\"></div>\n        <div class=\"menu-item-title-inner h3 accessible-text-block\" aria-hidden=\"true\">"
    + ((stack1 = (helpers.compile || (depth0 && depth0.compile) || alias2).call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\n    </div>\n    "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    <div class=\"menu-item-body\">\n        <div class=\"menu-item-body-inner\">"
    + ((stack1 = (helpers.compile || (depth0 && depth0.compile) || alias2).call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data})) != null ? stack1 : "")
    + "</div>\n    </div>\n    <div class=\"menu-item-button\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.duration : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <div class=\"js-menu-item-progress\"></div>\n        <button aria-label=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + alias4(((helper = (helper = helpers.linkText || (depth0 != null ? depth0.linkText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkText","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isVisited : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isLocked : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0._isLocked : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n            "
    + ((stack1 = ((helper = (helper = helpers.linkText || (depth0 != null ? depth0.linkText : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkText","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n        </button>\n    </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["boxmenu"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "				<div class=\"menu-title\">\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._disableAccessibleState : depth0),{"name":"unless","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "					<div class=\"menu-title-inner h1\" "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0._disableAccessibleState : depth0),{"name":"unless","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n						"
    + ((stack1 = (helpers.compile || (depth0 && depth0.compile) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"compile","hash":{},"data":data})) != null ? stack1 : "")
    + "\n					</div>\n				</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "						<div class=\"js-heading\"></div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "aria-hidden=\"true\"";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "				<div class=\"menu-body\">\n					<div class=\"menu-body-inner\">\n						"
    + ((stack1 = (helpers.compile || (depth0 && depth0.compile) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.body : depth0),{"name":"compile","hash":{},"data":data})) != null ? stack1 : "")
    + "\n					</div>\n				</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return container.escapeExpression(((helper = (helper = helpers.import_globals || (depth0 != null ? depth0.import_globals : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"import_globals","hash":{},"data":data}) : helper)))
    + "\n<div class=\"menu-container\">\n	<div class='menu-container-inner box-menu-inner clearfix'>\n		<div class=\"menu-header\">\n			<div class=\"menu-header-inner\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.displayTitle : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n		</div>\n		<div class=\"js-children\" role=\"list\">\n\n		</div>\n	</div>\n</div>\n";
},"useData":true});

return this["Handlebars"];

});