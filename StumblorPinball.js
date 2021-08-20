$( document ).ready(function() {
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
    /* General */
    @media (min-width: 1200px) {
      :root {
          --content-padding: 0;
          --max-container: 1100px!important;
      }
    }
    
    /* Product Page - 55/45 column split */
    @media (min-width: 600px) {
      .product-gallery__wrapper { max-width: 55%; }
      .product-detail-page .product-meta__wrapper {
          width: auto!important;
          max-width: 45%;
      }
    }
    
    /* Product Pages */    
    .zoomable__image[format=gif] { 
      object-fit: contain!important; 
    }

    /* Blockquote main style */
    blockquote {
        position: relative;
        font-family: 'Barlow Condensed', sans-serif;
        max-width: 620px;
        margin: 0 auto;
        align-self: center;
    }

    /* Blockquote header */
    blockquote h1 {
        position: relative; /* for pseudos */
        color: #333;
        font-size: 1.3em;
        line-height: 1.3;
        border: solid 2px;
        border-radius: 20px;
        padding: 25px;
    }

    /* Blockquote right double quotes */
    blockquote h1:after {
        content:"";
        position: absolute;
        border: 2px solid black;
        border-radius: 0 50px 0 0;
        width: 60px;
        height: 60px;
        bottom: -60px;
        left: 50px;
        border-bottom: none;
        border-left: none;
        z-index: 3; 
    }
    
    blockquote h1:before {
      content:"";
      position: absolute;
      width: 80px;
      border: 6px solid white;
      bottom: -3px;
      left: 50px;
      z-index: 2;
    }

    blockquote h4 {
        position: relative;
        font-size: 1em;
        font-weight: 400;
        line-height: 1.2;
        margin: 0;
        padding-top: 15px;
        z-index: 1;
        margin-left: 145px;
    }
    
    blockquote h4:first-letter {
      margin-left:-12px;
    }
    
    .video-container {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
      height: 0;
    }
    .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    
    /* Product description */
    .font--secondary p, .font--secondary span {
      font-size: 16px;
      line-height: 1.4em;
    }
    
    /* Landing Page */
    #Lzfjeo { 
      text-shadow: 0px 0px 5px black, 0px 0px 5px black, 0px 0px 5px black, 0px 0px 5px black;
    }
    #Lzfjeo h1 {
      font-size: 35px!important;
    }
    #Lzfjeo p {
      font-size: 24px!important;
    }
    
    .twipys::after {
      content: url('/uploads/1/3/2/3/132317513/s147425658952962846_p7_i2_w100.png');
    }
    
    /* Stories */
    .w-button__label[data-v-60313e8e]{position:relative}.w-button__label--hidden[data-v-60313e8e]{visibility:hidden}.w-button--label-wrap[data-v-60313e8e]{white-space:normal}.w-button--loading[data-v-60313e8e],.w-button--loading[data-v-60313e8e]:after,.w-button--loading[data-v-60313e8e]:before{animation:loading-data-v-60313e8e 1.8s ease-in-out infinite;animation-fill-mode:both;border-radius:50%;height:2.5em;width:2.5em}.w-button--loading[data-v-60313e8e]{animation-delay:-.16s;font-size:5px;left:50%;margin-left:-6px;margin-top:-19px;position:absolute;text-indent:-9999em;top:50%;transform:translateZ(0)}.w-button--loading[data-v-60313e8e]:after,.w-button--loading[data-v-60313e8e]:before{content:"";position:absolute;top:0}.w-button--loading[data-v-60313e8e]:before{animation-delay:-.32s;left:-3.5em}.w-button--loading[data-v-60313e8e]:after{left:3.5em}@keyframes loading-data-v-60313e8e{0%,80%,to{box-shadow:0 2.5em 0 -1.3em}40%{box-shadow:0 2.5em 0 0}}.w-button--empty .text[data-v-6f179aba]{position:absolute}.text[data-v-6f179aba] p{white-space:nowrap}.container[data-v-3d61f3dd]{display:flex}.figure__placeholder-wrapper[data-v-4c4756b8]{--color-white:#fff;--default-placeholder-bg:#f5f6f7;border-radius:2px;height:100%;position:relative;transition:opacity .2s ease-in-out;width:100%}.figure__placeholder-wrapper.display-under[data-v-4c4756b8]{position:absolute}.icon-align--bottom-right[data-v-4c4756b8]{--icon-margin-right:24px;--icon-margin-bottom:24px}.figure__placeholder-icon[data-v-4c4756b8]{left:calc(50% - var(--placeholder-half-size));opacity:.9;position:absolute;top:calc(50% - var(--placeholder-half-size))}.figure__placeholder-text[data-v-4c4756b8]{font-size:12px;opacity:.9;position:absolute;top:calc(50% + var(--placeholder-size))}@media (min-width:600px){.icon-align--bottom-right[data-v-4c4756b8]{--icon-margin-right:80px;--icon-margin-bottom:72px}}.icon-align--bottom-right .figure__placeholder-icon[data-v-4c4756b8]{left:calc(100% - var(--placeholder-size) - var(--icon-margin-right));top:calc(100% - var(--placeholder-size) - var(--icon-margin-bottom))}.figure__placeholder-bg[data-v-4c4756b8]{background-color:var(--default-placeholder-bg);background-color:var(--placeholder-bg,var(--default-placeholder-bg));height:100%;left:0;padding:0!important;position:absolute;top:0;width:100%}.figure__placeholder-bg[data-v-4c4756b8]:after{background-color:var(--brand-color);content:"";display:block;height:100%;opacity:.1;width:100%}.figure__aspect-ratio--1_1[data-v-4c4756b8]{padding-top:100%}.figure__aspect-ratio--16_9[data-v-4c4756b8]{padding-top:56.25%}.figure__aspect-ratio--4_3[data-v-4c4756b8],.figure__aspect-ratio--original[data-v-4c4756b8]{padding-top:75%}.figure__aspect-ratio--3_4[data-v-4c4756b8]{padding-top:133%}.figure__aspect-ratio--3_2[data-v-4c4756b8]{padding-top:66.66%}.figure__aspect-ratio--2_3[data-v-4c4756b8]{padding-top:150%}.figure__aspect-ratio--1_1.figure__shape--circle[data-v-4c4756b8]{border-radius:100%;overflow:hidden}.divider[data-v-2b9c9aba]{background-color:var(--divider-color);border:0;height:1px;width:100%}.card-link[data-v-85679d14]{color:inherit;text-decoration:inherit}.thumbnail[data-v-85679d14]{background-color:#ebedef;background-size:cover;margin-bottom:24px}.thumbnail[data-v-85679d14]:hover{opacity:.92}.two-line-ellipsis[data-v-85679d14]{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.rss-article-title[data-v-85679d14]{margin-bottom:4px}.rss-article-date[data-v-85679d14]{margin-bottom:20px}.rss-read-more[data-v-85679d14]{font-size:16px;font-weight:700;line-height:26px;margin-bottom:15px;margin-top:16px}.rss-read-more__link[data-v-85679d14]{color:inherit;text-decoration:none}.aspect-ratio-1_1[data-v-85679d14]{padding-top:100%}.aspect-ratio-4_3[data-v-85679d14],.aspect-ratio-original[data-v-85679d14]{padding-top:75%}.aspect-ratio-3_4[data-v-85679d14]{padding-top:125%}.skeleton[data-v-9a8d5f96]{animation:pulsing-data-v-9a8d5f96 1.25s ease-in-out infinite;background:var(--form-color--10)}@keyframes pulsing-data-v-9a8d5f96{0%{background-color:var(--form-color--10)}45%{background-color:var(--form-color--05)}90%{background-color:var(--form-color--10)}}.article-grid[data-v-bf3de280] .grid__item{overflow:hidden}.title-wrapper[data-v-bf3de280]{margin-bottom:16px}.subtitle-wrapper[data-v-bf3de280]{margin-bottom:24px}
    
    `
  ];
  for(var i = 0; i < css.length; i++)
    styleElement.appendChild(document.createTextNode(css[i]));

  document.getElementsByTagName('head')[0].appendChild(styleElement);

  // TOP BANNER EVERY LOAD
  setInterval(function() {
    if (window.leadForm && window.leadForm["form_ids"].length > 1) document.cookie = "leadform_" + window.leadForm["form_ids"][1] + "_viewed=; Max-Age=-99999999;";
  }, 1000);

  // Stories
  var stories = () => {
    // iframe 
    if ($('#dniXkG').length == 0) return setTimeout(stories, 500);
    $('#dniXkG').before("<iframe id='iframe_stories' style='display: none'></iframe>");
    $('#iframe_stories').attr("src", "https://www.stumblorpinball.com/s/stories");
    var wait = () => {
      if (!$('#iframe_stories')[0]) return setTimeout(wait, 500);
      var html = $('#iframe_stories')[0].contentWindow.document.documentElement;
      if (!html) return setTimeout(wait, 500);
      var $html = $(html);
      var $stories = $('#4078cd53-5d8e-11eb-ac18-c3411b499b43', $html);
      if ($stories.length == 0 || $stories.html() == "") return setTimeout(wait, 500);
      $('h3', $stories).css("text-align", "center");
      $('#dniXkG').before($stories);
      $('#iframe_stories').remove();
    }
    wait();
  }
  
  // Product Page - quotes
  var quotes = (target, cb) => {
    if ($(target).length == 0) return setTimeout(() => quotes(target, cb), 500);
    var html = $(target).html();
    html = html.replace(/\*\*\*\*(.*?)\((.*?)\)\((.*?)\)\*\*\*\*/gi, "<blockquote><h1>$1</h1><h4>$2<br/><i>$3</i></h4></blockquote>");
    $(target).html(html);
    if (cb) cb();
  }
  
  // Youtube embeds
  var youtube = (target, cb) => {
    if ($(target).length == 0) return setTimeout(() => youtube(target, cb), 500);
    var html = $(target).html();
    var embed = '<div class="video-container"><iframe width="560" height="315" src="$1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
    html = html.replace(/\$\$\$\$(.*?)\$\$\$\$/gi, embed);
    $(target).html(html);
    if (cb) cb();
  }
  
  // URL CHECKER
  var urlwas = "";
  setInterval(() => {
    var url = window.location.href;
    if (url != urlwas) {
      if (url == "https://www.stumblorpinball.com/") {
        stories();
        quotes("#uzNwiC p");
      }
      if (url.indexOf("https://www.stumblorpinball.com/product") >= 0) {
        quotes('.w-product-description > span', () => {
          youtube('.w-product-description > span');
        });
      }
    }
    urlwas = url;
    
    // remove footer
    $('#HZMYnr').remove();
  }, 500)
});
