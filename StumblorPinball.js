// Global site tag (gtag.js) - Google Analytics

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-FM7JMR8V4S');
gtag('config', 'UA-186317069-1');

//---------------------------------------
// DRIFT
!function() {
  var t = window.driftt = window.drift = window.driftt || [];
  if (!t.init) {
    if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
    t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
    t.factory = function(e) {
      return function() {
        var n = Array.prototype.slice.call(arguments);
        return n.unshift(e), t.push(n), t;
      };
    }, t.methods.forEach(function(e) {
      t[e] = t.factory(e);
    }), t.load = function(t) {
      var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
      o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(o, i);
    };
  }
}();
drift.SNIPPET_VERSION = '0.3.1';
drift.load('4333vua8587v');  

// CUSTOM CSS
var styleElement = document.createElement('style');

var css = [
  `
  // Animated GIFs on Product Page
  .zoomable__image[format=gif] { 
   object-fit: contain!important; 
  }
  #banner-text { 
    font-size: 24px!important;
  }
  `
];
for(var i = 0; i < css.length; i++)
  styleElement.appendChild(document.createTextNode(css[i]));
  
document.getElementsByTagName('head')[0].appendChild(styleElement);

// TOP BANNER EVERY LOAD
setInterval(function() {
  if (window.leadForm && window.leadForm["form_ids"].length > 1) document.cookie = "leadform_" + window.leadForm["form_ids"][1] + "_viewed=; Max-Age=-99999999;";
}, 1000);


function wait_for_jquery(method) {
    if (window.jQuery) {
        method();
    } else {
        setTimeout(function() { wait_for_jquery(method) }, 50);
    }
}

wait_for_jquery(() => {
  
  function addClass(item, clazz) {
    var clz = item.getAttribute("class");
    item.setAttribute("class", clz + " clazz");
  }
  
  // TWIPYS
  addClass($("div[alt='Move Your Snackbar | a lighting mod for Swinks CFTBL snackbar mod']"), "twipys"); // MYS
});
