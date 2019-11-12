/*
    ioBroker.vis bootstrap4 Widget-Set
    version: "0.0.1"
    Copyright 2019 Frank Schreier f.schreier@xnet2.de
*/
"use strict";
// add translations for edit mode
if (vis.editMode) {
    $.extend(true, systemDictionary, {
		"font":       		{"en": "Icon class",       	"de": "Icon Klasse"},
		"size":       		{"en": "Icon size(px)",     "de": "Symbolgröße(px)"},
		"fontColor":		{"en": "Text color",       	"de": "Schriftfarbe"},
		"backcolor":       	{"en": "Background color",  "de": "Hintergrundfarbe"},
		"pageHtml":       	{"en": "HTML",  			"de": "HTML"},
    });
}
vis.binds["bootstrap4"] = {
    version: "0.0.1",
    showVersion: function () {
        if (vis.binds["bootstrap4"].version) {
            console.log('Version bootstrap4: ' + vis.binds["bootstrap4"].version);
            vis.binds["bootstrap4"].version = null;
        }
		// add Bootstrap JS only when not in Edit-Mode!!!! Important!!!
		if(!vis.editMode){
			$('<script type="text/javascript" src="widgets/bootstrap/js/bootstrap.bundle.min.js"></script>').insertAfter('body');
		}
    },
    createWidget: function (widgetID, view, data, style) {
        var $div = $('#' + widgetID);
        // if nothing found => wait
        if (!$div.length) {
            return setTimeout(function () {
                vis.binds["bootstrap4"].createWidget(widgetID, view, data, style);
            }, 100);
        }
    }
};
vis.binds["bootstrap4"].showVersion();