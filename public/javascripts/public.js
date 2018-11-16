





inCludeScript("../hfour/javascripts/jquery.fullpage.min.js");

inCludeScript("../hfour/javascripts/addons.js");

















function inCludeScript(url){
    document.write('<script type="text/javascript" src="/javascripts/' + url + '"> </script>');
	return false;
}