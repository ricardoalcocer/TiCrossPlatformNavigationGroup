function Controller() {
    function openwin() {
        var xpng = require("xpng");
        xpng.openWin(Alloy.CFG.nav, "win1");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "main";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId1 = Ti.UI.createWindow({
        id: "__alloyId1"
    });
    $.__views.__alloyId1 && $.addTopLevelView($.__views.__alloyId1);
    $.__views.mainwin = Ti.UI.createWindow({
        title: "Main Window",
        backgroundColor: "#fff",
        navBarHidden: false,
        exitOnClose: true,
        id: "mainwin"
    });
    $.__views.__alloyId2 = Ti.UI.createButton({
        title: "Open First Window",
        id: "__alloyId2"
    });
    $.__views.mainwin.add($.__views.__alloyId2);
    openwin ? $.__views.__alloyId2.addEventListener("click", openwin) : __defers["$.__views.__alloyId2!click!openwin"] = true;
    $.__views.nav = Ti.UI.iPhone.createNavigationGroup({
        window: $.__views.mainwin,
        id: "nav"
    });
    $.__views.__alloyId1.add($.__views.nav);
    exports.destroy = function() {};
    _.extend($, $.__views);
    true && !Alloy.CFG.nav && (Alloy.CFG.nav = $.nav);
    __defers["$.__views.__alloyId0!click!openwin"] && $.__views.__alloyId0.addEventListener("click", openwin);
    __defers["$.__views.__alloyId2!click!openwin"] && $.__views.__alloyId2.addEventListener("click", openwin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;