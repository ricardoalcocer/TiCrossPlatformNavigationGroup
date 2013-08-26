if (OS_IOS && !Alloy.CFG.nav){
	Alloy.CFG.nav=$.nav;	
}

function openwin(){
	var xpng=require('xpng');
	xpng.openWin(Alloy.CFG.nav,'win1');
}