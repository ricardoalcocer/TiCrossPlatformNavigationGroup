var xpng=require('./lib/xpng');

// this is the main window for both iOS or Android
var mainWin = Titanium.UI.createWindow({
    backgroundColor: 'red',
    title: 'Red Window',
    navBarHidden: false,
    exitOnClose: true
});

// on iOS the main window is a child of the NavigationWindow
if (Ti.Platform.osname === 'iphone'){
	var ng = Titanium.UI.iOS.createNavigationWindow({
	   window: mainWin
	});	
}
//

// button for mainWin
var button = Titanium.UI.createButton({
    title: 'Open Blue Window'
});
button.addEventListener('click', function(){
    // arguments:
    // ng               : pointer to navigation window
    // win2             : pointer to window to open
    // payload object   : any data we want to pass to the new window
    xpng.openWin(ng,win2,{
    	key1:'value1',
    	key2:'value2'
    });
});
mainWin.add(button);
//

// second window
var win2 = Titanium.UI.createWindow({
    backgroundColor: 'blue',
    title: 'Blue Window',
    navBarHidden: false
});

// this event listener is here just to test that the payload is being received
win2.addEventListener('open',function(e){
    alert(e.source.key1 + ',' + e.source.key2);
})
//

// button for second window
var button2 = Titanium.UI.createButton({
    title: 'Close Blue Window'
});
button2.addEventListener('click', function(){
    win2.close();
});
win2.add(button2);
//

// if running on iOS open the NavigationWindow, else open the mainWin directly
switch (Ti.Platform.osname){
	case 'iphone':
		ng.open();	
		break;
	case 'android':
		mainWin.open();
		break;
	default:
		// handle other platforms?
}
