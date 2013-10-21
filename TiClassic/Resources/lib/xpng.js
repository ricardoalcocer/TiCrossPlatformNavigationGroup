exports.openWin=function(navGroup,winName,payload){
	if (typeof Alloy === 'undefined'){
		var w=winName; // transfer the value to a new variable so the rest of the code remains the same	
		// if there was a payload object transfer the values to the window
		if (payload){
			var payloadKeys=Object.keys(payload);
			payloadKeys.forEach(function(item,index){
				w[payloadKeys[index]]=payload[item];
			})
		}
	}else{
		var w=Alloy.createController(winName,payload || {}).getView();
	};
	
	if (Ti.Platform.osname==='android'){
		w.addEventListener('open',function(e){
			if (! w.getActivity()) {
	            Ti.API.error("Can't access action bar on a lightweight window.");
	        } else {
	            actionBar = w.activity.actionBar;
	            if (actionBar) {
	                actionBar.displayHomeAsUp=true;
	                actionBar.onHomeIconItemSelected = function() {
	                    w.close();
	                };
	            }
	            w.activity.invalidateOptionsMenu();
	        }
		});
		w.open();
	}else{
		navGroup.openWindow(w,{animated:true});
	}
};