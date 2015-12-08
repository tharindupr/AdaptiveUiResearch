// Generating random user ids
var random = function () {
   var rand = Math.floor((Math.random() * 10) % 3);
   return rand;
};

var prefix = ['abc', 'def', 'ghi'];
var middle = ['123', '456', '789'];
var suffix = ['rst', 'uvw', 'xyz'];

var randomUserId = function () {
   var v1 = random();
   var v2 = random();
   var v3 = random();
   return prefix[v1] + '-' + middle[v2] + '-' + suffix[v3];
};

var randomId = randomUserId();
// End of generating random user ids

var _paq = _paq || [];

_paq.push(['setUserId', randomId]);

_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function () {
   var u = "//52.91.17.179/piwik/";
   _paq.push(['setTrackerUrl', u + 'piwik.php']);
   _paq.push(['setSiteId', 1]);
   var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
   g.type = 'text/javascript'; g.async = true; g.defer = true; g.src = u + 'piwik.js'; s.parentNode.insertBefore(g, s);
})();

function trackEvent(category, action, name, value) {

   _paq.push(['trackEvent', category, action, name, value]);

}
function trackFeatures() {
  alert();
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
