// Generating random user ids


var _paq = _paq || [];


_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function () {
   var u = "//adaptiveui.tk//piwik/";
   _paq.push(['setTrackerUrl', u + 'piwik.php']);
   _paq.push(['setSiteId', 1]);
   var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
   g.type = 'text/javascript'; g.async = true; g.defer = true; g.src = u + 'piwik.js'; s.parentNode.insertBefore(g, s);
})();

function trackEvent(category, action, name, value) {

   _paq.push(['trackEvent', category, action, name, value]);

}
function trackFeatures() {
  $(".feature").hoverIntent(
    function(){
      $(this).data( "mouseover", 0 );
      $(this).mouseover(function(){
        $(this).data( "mouseover", $(this).data( "mouseover") + 1 );
        console.log($(this).data( "mouseover")+" "+$(this).data( "feature"));
      });

    },
    function(){

      $(this).unbind("mouseover");
      console.log($(this).data( "mouseover"));
      trackEvent($(this).data( "feature"), "mouseover", "time", $(this).data( "mouseover"));
      $(this).data( "mouseover", 0 );
    }
  );

}

function intializeUser(userId) {

   _paq.push(['setUserId', userId]);
}
