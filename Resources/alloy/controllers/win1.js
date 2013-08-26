function Controller() {
    function openwin() {
        var xpng = require("xpng");
        xpng.openWin(Alloy.CFG.nav, "win2");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "win1";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win1 = Ti.UI.createWindow({
        title: "Window 1",
        backgroundColor: "#fa0",
        navBarHidden: "false",
        id: "win1"
    });
    $.__views.win1 && $.addTopLevelView($.__views.win1);
    openwin ? $.__views.win1.addEventListener("click", openwin) : __defers["$.__views.win1!click!openwin"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.win1!click!openwin"] && $.__views.win1.addEventListener("click", openwin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;