var myURL = document.location.href;
var tSeek = null;
var tList = null; 
var cGone = 0;
var aNext = false;
var seekTry = 0;

function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
}

function SnD(eleID, aRRay){
	if(eleID === undefined){
		console.log("All bitches is scanned.\r\nThat's all i can do ;)\r\nRegard's from th30nly");
		clearInterval(tSeek);
		cGone = 0;
		seekTry = 0;
		aNext = true;
	}
	
	var tDestroy = null;
	var bitchID = aRRay;
	var val = document.getElementById(eleID);
	console.log("scan for this bitch "+bitchID[cGone]);
	console.log("try "+seekTry);
	seekTry++;	
	
	if(seekTry > 20){		
		if(cGone < bitchID.length){
			console.log("i'm fucking tired w/ those fucking "+bitchID[cGone]+"\r\nNext Bitch please!");
			cGone++;
			seekTry = 0;
		}else{
			console.log("All bitches is scanned.\r\nThat's all i can do ;)\r\nRegard's from th30nly");
			clearInterval(tSeek);
			cGone = 0;
			seekTry = 0;
			aNext = true;
		}
		
	}
	if(val != null){
		removeElement( document.getElementById(eleID) );
		var val = document.getElementById(eleID);
		if(val === null ){
			cGone++;
			seekTry = 0;
			console.log("bitch "+bitchID[cGone]+" has been fucked by th30nly #yummy");
		}
	}
}

function SnDc(eleID, aRRay){
	if(aNext){		
		if(eleID === undefined){
			console.log("All bitches is scanned.\r\nThat's all i can do ;)\r\nRegard's from th30nly");
			clearInterval(tSeeks);
			cGone = 0;
			seekTry = 0;
			aNext = true;
		}
		
		var tDestroy = null;
		var bitchID = aRRay;
		var val = document.getElementsByClassName(eleID);
		console.log("scan for this bitch "+bitchID[cGone]);
		console.log("try "+seekTry);
		seekTry++;
		
		if(seekTry > 20){		
			if(cGone < bitchID.length){
				console.log("i'm fucking tired w/ those fucking "+bitchID[cGone]+"\r\nNext Bitch please!");
				cGone++;
				seekTry = 0;
			}else{
				console.log("All bitches is scanned.\r\nThat's all i can do ;)\r\nRegard's from th30nly");
				clearInterval(tSeeks);
				cGone = 0;
				seekTry = 0;
				aNext = true;
			}
			
		}
		if(val[0]){
			removeElement( val[0] );
			var val = document.getElementsByClassName(eleID);
			if(val[0] === null || val[0] === undefined ){
				cGone++;
				seekTry = 0;
				console.log("bitch "+bitchID[cGone]+" has been fucked by th30nly #yummy");
			}
					
			
		}
	}
}

function bitch(aRRay){
	var bitchID = aRRay;
	tSeek = setInterval(function() { SnD(bitchID[cGone],bitchID);}, 500);				
}

function bitches(aRRay){
	var bitchID = aRRay;
	tSeeks = setInterval(function() { SnDc(bitchID[cGone],bitchID);}, 500);				
}

var ihateads ="";

if ( myURL.match("mangacanblog.com") != null ){
	var ihateads = ["topbar"];
	bitch(ihateads);
}

if ( myURL.match("yahoo.com") != null ){
	var ihateads = ["yom-ad-NT1", "yom-ad-LREC", "yom-ad-NP2"];
	bitch(ihateads);
}


var imported = document.createElement('script');
imported.src = 'http://connect.facebook.net/en_US/all/debug.js';
document.getElementsByTagName('head')[0].appendChild(imported);


