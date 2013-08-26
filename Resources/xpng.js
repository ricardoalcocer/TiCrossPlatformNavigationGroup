exports.openWin = function(navGroup, winName) {
    var w = Alloy.createController(winName).getView();
    Alloy.CFG.nav.open(w, {
        animated: true
    });
};