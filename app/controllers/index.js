Alloy.CFG.nav=$.nav;

// Sometimes we want our first screen to have no titlebar

// On Android we need to hide the ActionBar when the activity is ready
function doopen(e){
	if (OS_ANDROID){
		var actionBar=$.index.getActivity().actionBar;
		if (actionBar){
			actionBar.hide();
		}	
	}
}

// then to hide it on iOS, we use the hideNavBar method
if (OS_IOS){
	$.win1.hideNavBar();	
}

$.index.open();
