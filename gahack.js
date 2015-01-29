var myURL = document.location.href;
var tSeek = null;
var tSeeks = null;
var cGone = 0;
var aNext = false;
var seekTry = 0;

function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
}

function div_class_hack(FindMe) {
	var divCollection = document.getElementsByTagName("div");
	for (var i=0; i<divCollection.length; i++) {
		if(divCollection[i].getAttribute("class") == FindMe) {
			var old = divCollection[i].innerHTML;
			old = "</div><div class='gotcha'>" + old;
			divCollection[i].innerHTML = old;
		} 
	}
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
	console.log("scan id for this bitch "+bitchID[cGone]);
	seekTry++;
	console.log("try "+seekTry);
	
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
		if(val === null){
			cGone++;
			seekTry = 0;
			console.log("bitch "+bitchID[cGone]+" has been fucked by th30nly #yummy");
		}
	}else{
		if (document.readyState === "complete" && seekTry > 20) {
			seekTry = 0;
			if(cGone < bitchID.length){
				console.log("Page load complete, no way "+bitchID[cGone]+" can be found.\r\nNext Bitch please!");
				cGone++;			
			}else{
				console.log("All bitches is scanned.\r\nThat's all i can do ;)\r\nRegard's from th30nly");
				clearInterval(tSeek);
				cGone = 0;
				aNext = true;
			}
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
		console.log("scan class for this bitch "+bitchID[cGone]);
		console.log("try "+seekTry + " cgone "+cGone+" lenght "+bitchID.length);
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
			if(val[0] === null){
				cGone++;
				seekTry = 0;
				console.log("bitch "+bitchID[cGone]+" has been fucked by th30nly #yummy");
			}
					
			
		}else{
			if (document.readyState === "complete" && seekTry > 20) {
			seekTry = 0;
			if(cGone < bitchID.length){
				console.log("Page load complete, no way "+bitchID[cGone]+" can be found.\r\nNext Bitch please!");
				cGone++;			
			}else{
				console.log("All bitches is scanned.\r\nThat's all i can do ;)\r\nRegard's from th30nly");
				clearInterval(tSeek);
				cGone = 0;
				aNext = true;
			}
			}
		}
		
	}else{
		console.log("wait for it .. ");
	}
}

function bitch(aRRay){
	var bitchID = aRRay;
	tSeek = setInterval(function() { SnD(bitchID[cGone],bitchID);}, 500);				
}

function bitches(aRRay){
	var bitchIDc = aRRay;
	tSeeks = setInterval(function() { SnDc(bitchIDc[cGone],bitchIDc);}, 500);				
}

var ihateads ="";

if ( (myURL.match("ganool.com") != null) ){
	var ihateads = ["floating_banner_left2","floating_banner_top", "floating_banner_top2", "floating_banner_bottom", "floating_banner_bottom2", "text-6", "floating_banner_left1", "floating_banner_right1", "floating_banner_left2", "post-35426"];
	bitch(ihateads);
}else if ( (myURL.match("detik.com") != null) ){
	var ihateads = ["billboard_banner","otp_banner","bottom_banner"];	
	bitch(ihateads);
	ihateads = ["banner_reg","banner_center","leader_banner"];	
	bitches(ihateads);
}else if ( (myURL.match("krucil.net") != null) || (myURL.match("173.199.167.192") != null) ){
	var ihateads = ["ad_floating_top", "ad_floating_left", "ad_floating_right", "ad_floating_left", "KD_adpB", "ad_main", "ad_floating_bottom", "ad_global_header2" , "ad_global_header1" , "ad_thread_first_post_content"];
	bitch(ihateads);
	ihateads = ["krucil_ads","tborder","ad_floating_top","ad_floating_left","ad_floating_right","ad_floating_left","ad_floating_bottom","KD_adpB","ad_main"];
	bitches(ihateads);
}else if ( (myURL.match("semprot.com") != null) || (myURL.match("96.30.52.192") != null)){
	var ihateads = ["ad_global_below_navbar","ad_thread_first_post_content","my_ads_clicked"];	
	bitch(ihateads);
	ihateads = ["ad_global_header","semprot_ads"];	
	bitches(ihateads);
}else if ( (myURL.match("mediafire.com") != null) ){
	var ihateads = ["remove_ads_button1", "remove_ads_button2", "remove_ads_button4", "remove_ads_button8" ];
	bitch(ihateads);
}else if ( (myURL.match("kickass.to") != null) ){
	var ihateads = ["advertising", "margauto"];
	var aNext = true;
	bitches(ihateads);
}else if ( myURL.match("imagebunk.com") != null ){
	var ihateads = ["redirect-ad", "adleft"];
	bitch(ihateads);
}else if ( myURL.match("mangafox.me") != null ){
	var ihateads = ["ad_top", "spotlight"];
	bitch(ihateads);
}else if ( myURL.match("redhawkscans.com") != null ){
	var ihateads = ["ad_global_below_navbar"];
	bitch(ihateads);
}else if ( myURL.match("zippyshare.com") != null ){
	var ihateads = ["center_reklamy"];
	var aNext = true;
	bitches(ihateads);
}else if ( myURL.match("imagebam.com") != null ){
	var ihateads = ["redirect-ad"];
	bitch(ihateads);
}else if ( myURL.match("kaskus.co.id") != null ){
	var ihateads = ["banner-top-wrapper","l-link","r-link","bt-frame-ads"];
	var aNext = true;
	bitches(ihateads);
}else if ( myURL.match("2baksa.net") != null ){
	var ihateads = ["smile_teaser_3662", "smile_teaser_3665"];
	bitch(ihateads);
}else if ( myURL.match("imgmaster.net") != null ){
	var ihateads = ["banner"];
	bitch(ihateads);
}else if ( myURL.match("polisionline.com") != null ){
	var ihateads = ["HTML4","HTML5","HTML6","HTML10","HTML11","HTML12"];
	bitch(ihateads);
}else if ( myURL.match("downloadfilmbaru.com") != null ){
	var ihateads = ["topads","btm_banner"];
	bitch(ihateads);
	ihateads = ["ads","adunit"];
	bitches(ihateads);
}else if ( myURL.match("idfl.me") != null ){
	var ihateads = ["ad_global_below_navbar","fancybox-overlay","fancybox-wrap"];
	bitch(ihateads);
}else if ( myURL.match("cinema81.com") != null ){
	var ihateads = ["text-15","footer","banner-right"];
	bitch(ihateads);
}

var imported = document.createElement('script');
imported.src = 'http://www.google-analytics.com/u/ga_debug.js';
document.getElementsByTagName('head')[0].appendChild(imported);


