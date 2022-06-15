(function() {
  
  $(document).ready(function() {
    
    setTimeout(() => {

      // Product Page - quotes
      var quotes = (target, cb) => {
        if ($(target).length == 0) return setTimeout(() => quotes(target, cb), 500);
        $(target).each(function(i, item) {
          var html = $(item).html();
          var regex = /\*\*\*\*(.*?)\((.*?)\)\((.*?)\)\*\*\*\*/gi;
          if (!regex.test(html)) return;
          html = html.replace(regex, "<blockquote><h1>$1</h1><h4>$2<br/><i>$3</i></h4></blockquote>");
          $(item).html(html);
        });
        if (cb) cb();
      }

      // Youtube embeds
      var youtube = (target, cb) => {
        if ($(target).length == 0) return setTimeout(() => youtube(target, cb), 500);
        $(target).each(function(i, item) {
          var html = $(item).html();
          var regex = /\$\$\$\$(.*?)\$\$\$\$/gi;
          if (!regex.test(html)) return;
          var embed = '<div class="video-container"><iframe width="560" height="315" src="$1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
          html = html.replace(regex, embed);
          $(item).html(html);
        });
        if (cb) cb();
      }

      function checkVisible( elm, evalType ) {
        evalType = evalType || "visible";
        if ($(elm).length == 0 || !$(elm).offset()) return false;
        var vpH = $(window).height(), // Viewport Height
            st = window.scrollY, // Scroll Top
            y = $(elm).offset().top,
            elementHeight = $(elm).height();

        if (evalType === "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
        if (evalType === "above") return ((y < (vpH + st)));
      }


      // Friends and Partners Scroller
      var carousel = function() {

        $('#carousel').css("opacity", 0);
        $('#carousel').show();

        if (!checkVisible('#carousel')) return false;

        var html = `
          <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>

          <section class="logo-carousel slider" data-arrows="true">

          <div class="slide"><a href='http://www.pinballsupernova.com/'><img src="https://images.editor.website/uploads/b/76d484b672c0c8cc0b276992d7ac72a4cda998bbb8f494dae5df4b382649f2cd/pinball supernova sticker_1611598454.jpg"></a></div>
          <div class="slide"><a href='https://pinballbazaar.co.uk/'><img src="https://images.editor.website/uploads/b/76d484b672c0c8cc0b276992d7ac72a4cda998bbb8f494dae5df4b382649f2cd/the-pinball-bazaar-01-small_1611598457.png"></a></div>
          <div class="slide"><a href='https://swinks.com.au/'><img src="https://images.editor.website/uploads/b/76d484b672c0c8cc0b276992d7ac72a4cda998bbb8f494dae5df4b382649f2cd/swinks_1611652897.png"></a></div>
          <div class="slide"><a href='https://www.majesticpinball.co.uk/'><img src="https://images.editor.website/uploads/b/76d484b672c0c8cc0b276992d7ac72a4cda998bbb8f494dae5df4b382649f2cd/majesticpinball_1612347249.png"></a></div>
          <div class="slide"><a href='https://www.pinballlife.com/'><img src="https://square.online/uploads/1/3/2/3/132317513/s147425658952962846_p7_i3_w400.png?width=160"></a></div>

          <div class="slide"><a href='http://www.pinballsupernova.com/'><img src="https://images.editor.website/uploads/b/76d484b672c0c8cc0b276992d7ac72a4cda998bbb8f494dae5df4b382649f2cd/pinball supernova sticker_1611598454.jpg"></a></div>
          <div class="slide"><a href='https://pinballbazaar.co.uk/'><img src="https://images.editor.website/uploads/b/76d484b672c0c8cc0b276992d7ac72a4cda998bbb8f494dae5df4b382649f2cd/the-pinball-bazaar-01-small_1611598457.png"></a></div>
          <div class="slide"><a href='https://swinks.com.au/'><img src="https://images.editor.website/uploads/b/76d484b672c0c8cc0b276992d7ac72a4cda998bbb8f494dae5df4b382649f2cd/swinks_1611652897.png"></a></div>
          <div class="slide"><a href='https://www.majesticpinball.co.uk/'><img src="https://images.editor.website/uploads/b/76d484b672c0c8cc0b276992d7ac72a4cda998bbb8f494dae5df4b382649f2cd/majesticpinball_1612347249.png"></a></div>
          <div class="slide"><a href='https://www.pinballlife.com/'><img src="https://square.online/uploads/1/3/2/3/132317513/s147425658952962846_p7_i3_w400.png?width=160"></a></div>      
          </section>
          `;

        var style = `
          <style>
          #carousel {
            height: 162px;
            overflow: hidden;
          }
          .logo-carousel {
            overflow: inherit;
            background-color: transparent;
            min-height: 200px;
            overflow: hidden;
            width: 100%;
            max-width: 100vw;
          }

          /* Slider */
          .slick-slide {
            margin: 0px 20px;
            filter: grayscale(100%);
            height: 100%;
            /*opacity: 0.8;
            min-height: 150px;*/
            min-width: 152px;
            position: relative;  
            transition: filter ease-in-out 0.2s, zoom ease-in-out 0.2s;
            margin-bottom: 10px;
          }
          .slick-slide:hover {
            filter: grayscale(0%);
          }
          .slick-list {
            overflow: visible;
          }
          .slick-slide {
            min-height: 150px;
          }
          .slick-slide img {
            max-width: 150px;
            margin: 0 auto;
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);
          }

          .slick-track::before,
          .slick-track::after {
            display: table;
            content: '';
          }

          .slick-track::after {
            clear: both;
          }

          .slick-track {
            padding: 1rem 0;
          }

          .slick-loading .slick-track {
            visibility: hidden;
          }

          .slick-slide.slick-loading img {
            display: none;
          }

          .slick-slide.dragging img {
            pointer-events: none;
          }

          .slick-loading .slick-slide {
            visibility: hidden;
          }

          .slick-arrow {
            position: absolute;
            top: 50%;
            background: url(https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/arrow.svg?sanitize=true) center no-repeat;
            color: #fff;
            filter: invert(77%) sepia(32%) saturate(1%) hue-rotate(344deg) brightness(105%) contrast(103%);
            border: none;
            width: 2rem;
            height: 1.5rem;
            text-indent: -10000px;
            margin-top: -16px;
            z-index: 99;
          }

          .slick-arrow.slick-next {
            right: -40px;
            transform: rotate(180deg);
          }

          .slick-arrow.slick-prev {
            left: -40px;
          }

          </style>
        `;


        // style
        $('#carousel').css("transition", "opacity ease-in 1s");
        var divNode = document.createElement("div");
        divNode.innerHTML = style;
        document.body.appendChild(divNode);

        // insert carousel
        $('#carousel')[0].innerHTML = html;

        $('.logo-carousel').slick({
          autoplay: false,
          cssEase: 'linear',
          autoplay: true,
          speed: 3990,
          autoplaySpeed: 0,
          slidesToShow: 8,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          pauseOnHover: false,
          responsive: [{ breakpoint: 520, settings: { slidesToShow: 2 } }]
        });

        $('#carousel').css("opacity", 1);
        return true;
      }

      var parallax = function() {
        if (!window.Parallax) return;
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene);
      }

      // Disables particular variants on the product page
      var variant_disabler = function(to_disable) {
        for(var d = 0; d < to_disable.length; d++) {

          var item = to_disable[d];

          $("input[name="+ item.source +"]").on("click", function() {

            // re enable all
            $("input[name="+ item.target +"]").each(function(i, item) { item.disabled = false; });

            var value = $(this).val();
            var deselect = false;

            if (item.when.indexOf(value) >= 0) {
              var $selected = $("input[name="+ item.target +"]:checked");
              for(var i = 0; i < item.disable.length; i++) {
                var $item = $("input[value='" + item.disable[i] + "']");
                $item[0].disabled = true;

                // deselect if selected
                if ($selected.val() == $item.val()) deselect = true;

              }

              if (deselect)
                $("input[name="+ item.target +"]:not(:disabled)")[0].click();
            }

          });

          // click the selected one, to start things off
          $("input[value='" + $('input[name=Architecture]:checked').val() + "']").trigger("click");
        }
      }

      window.auto_play_videos = function() {
        // autoplay videos when on screen
        var played = 0;
        $("video").each(function(i, video) {
          if (checkVisible(video) && video.played.length == 0) {
            video.muted = true;
            video.play();
            played++;
          }
        });      
      }

      window.lazy_load_images = function() {
        // lazy loading images
        if (!window.lazyLoadInstance && window.LazyLoad) {
          window.lazyLoadInstance = new LazyLoad({
            // Your custom settings go here
          });
        } else if (window.lazyLoadInstance)
          window.lazyLoadInstance.update();
      }
      
      // mailchimp
      var mailchimp = function() {
        // Mailchimp popup
        !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/7dffe265683776eb696012413/090d31bc3fc89af336a7eae8a.js");
      }
      
      // drift chat
      var drift_load = function() {
        // Drift
        var t = window.driftt = window.drift = window.driftt || [];
        if (!t.init) {
          if (t.invoked) return void (window.console && console.error 
                                      && console.error("Drift snippet included twice."));
          t.invoked = !0, t.methods = [ "identify", "config", "track", 
                                       "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
            t.factory = function(e) {
            return function() {
              var n = Array.prototype.slice.call(arguments);
              return n.unshift(e), t.push(n), t;
            };
          }, t.methods.forEach(function(e) {
            t[e] = t.factory(e);
          }), t.load = function(t) {
            var e = 3e5, n = Math.ceil(new Date() / e) * e, o 
            = document.createElement("script");
            o.type = "text/javascript", o.async = !0, o.crossorigin 
            = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
            var i = document.getElementsByTagName("script")[0];
            i.parentNode.insertBefore(o, i);
          };

          drift.SNIPPET_VERSION = '0.3.1';
          drift.load('4333vua8587v');  
        }
      }

      // SCROLL DEBOUNCER
      window.timeouts = [];
      window.timeouts_done = [];
      var timeout_i = [];
      scroll_debounce = function(fn, do_once) {
        (function(i, once) {
          	$(window).on("scroll", function() {
                clearTimeout(timeouts[i]);
                timeouts[i] = setTimeout(() => {
                	if (once && timeouts_done[i]) return;
              		if (fn() != false) timeouts_done[i] = true;
                }, 100);
        	});
        })(timeout_i, do_once);
        if (!do_once) setTimeout(fn, 500); //call immediate
    	timeout_i++;
      }

      var quote_rotate = function() {
        $('#quotes').css({
            "transform": "translateX(0)",
            "transition": "0.5s ease-in-out"
        });
	    var quote_items = [
          '****<a href=\"https://stumblorpinball.com/products/move\">Move Your Snackbar</a><b>You took the signage to a new level</b> - looks awesome...(<img src="https://imgproxy.pinside.com/hcA4gRuiEMtJ_-apoPZiZPNh9XC1BGaugyqbW6EO_d8/rs:fill:140:140/c:0:0:sm/ush:always:1.5:20/q:70/aHR0cHM6Ly9vLnBpbnNpZGUuY29tLzMvZmQvOWQvM2ZkOWQzNDc2YWNjNWYzMTJiZGUyZmNhYjBlNmNiNzI2YWJiOGJkMS5qcGc">Swinks)(Pinside)****',
          '****<a href=\"https://stumblorpinball.com/products/echo\">Chase Echo</a>It has been 2 months now since I installed your Chase Echo. It has worked flawlessly since the first day that I installed it into my CFTBL. It is a pleasure just to turn my CFTBL on and watch it for several minutes in attract mode. <b>This truly is one of the best mods I have ever added to one of my games</b>.(<img src="https://imgproxy.pinside.com/xQObds2z6VwxaX1jPBwziLFj7S0wf81Gw-A_s3Odu3A/rs:fill:140:140/crop:1159:1159:nowe:1750:802/ush:always:1.5:20/q:70/aHR0cHM6Ly9vLnBpbnNpZGUuY29tLzkvZjQvYWYvOWY0YWZlMzg4YTI5ZTM5N2EzY2NlMTM2ODQ2ZGM1OWIyNWEzNDAwYy5qcGc"/>GRB1959)(Pinside)****',
          '****<a href=\"https://stumblorpinball.com/products/lolp\">Lollypops</a>Fitted this kit to my T.Z today, honestly I could do it with my eyes shut very easy to install, <b>looks fantastic</b> and with WiFi easy to adjust to taste. (</span><img src="https://www.pinballinfo.com/community/data/avatars/m/3/3594.jpg?1535638999"><span>Happypin)(Pinballinfo)****',
          "****<a href=\"https://stumblorpinball.com/products/move\">Move Your Snackbar</a>Couldn't agree more! <b>You hit it out of the park with this!</b>&nbsp;(<img src=\"https://imgproxy.pinside.com/25LbYXkN3ucevDAC0Gl61CaFU6Oz9TpbFAJRXYHr9Go/rs:fill:80:80/crop:600:599:nowe:0:0/ush:always:1.5:20/q:70/aHR0cHM6Ly9vLnBpbnNpZGUuY29tL2EvNWIvY2UvYTViY2UzZThlNDBiMjdmYTdhOWU3YjZiMmM1NzJiODU2ZTk1Y2FmYS5qcGc\">n4297m)(Pinside)****",
          "****<a href=\"https://stumblorpinball.com/products/echo\">Chase Echo</a>My board arrived today. All fitted and works a treat. <strong>The build quality is fantastic</strong> ☺️ (<img src=\"https://imgproxy.pinside.com/VhCuGmDVFXDdBordClh8I8lnJy0A9OfdmikuRAW_LPc/rs:fill:140:140/crop:1534:1534:nowe:255:0/ush:always:1.5:20/q:70/aHR0cHM6Ly9vLnBpbnNpZGUuY29tL2MvN2UvYmIvYzdlYmI4ZjI0Mzc4Njg0ODk2YWQ3NzBlM2M2NWM3NDUxMTNlMTE5ZS5qcGc\">Gorgar1)(Pinside)****",
          "****<a href=\"https://stumblorpinball.com/products/echo\">Chase Echo</a><b>Wow, what a nice upgrade to the look of those lamps!</b> The Chase Echo board also lights up the incandescents quite a bit more than my original board did. Maybe that's the age of the old board, but it's an unexpected bonus of installing your board, besides all of the additional patterns, of course. Thanks for making this. It really makes the game look better, and that's the whole point. Great work! (Mark Thompson)(Email)****"
        ];
    	var quote_index = 0;
    
        // add 3 quotes
        for (var i = 0; i < 3; i++) {
          quote_index = i;          
          $('#quotes').append('<li class="grid__item">'+ quote_items[quote_index] +'</li>');
        };
        $('#quotes li').eq(2).css({ "transition": "opacity 0.5s ease-in-out" });
    	quotes(".title-wrapper-with-link");

    	setInterval(function() {

          // don't rotate if mobile
          if ($(window).width() < 600) return;
          
          // move to the left
          $('#quotes').css({ "transform": "translateX(-33.333%)" });

          setTimeout(function() {
	        // reshuffle the quotes
            $('#quotes li').eq(0).html($('#quotes li').eq(1).html());
            $('#quotes li').eq(1).html($('#quotes li').eq(2).html());
            quote_index++; 
            if (quote_index >= quote_items.length) quote_index = 0;
            $('#quotes li').eq(2).css("opacity", 0).html(quote_items[quote_index]);
            $('#quotes').css({ "transition": "0s ease-in-out" });
            $('#quotes').css({ "transform": "translateX(0)" });
            $('#quotes').css({ "transition": "0.5s ease-in-out" });
            setTimeout(() => $('#quotes li').eq(2).css("opacity", 1), 100);
            quotes(".title-wrapper-with-link");
          }, 500);
          
        }, 4000);
  	  }
                    
      // -------------------------
      // PAGE SPECIFIC FUNCTIONS
      // -------------------------
      switch(shopify_template) {
          
          //-----------------------------------------------
          case "index":

            // landing page
            parallax();
            scroll_debounce(auto_play_videos);
            scroll_debounce(carousel, true);
          	quote_rotate();

            break;
          //-----------------------------------------------          
          case "product":

            quotes('.product__description p', () => {
              youtube('.product__description p');
            });

            // VARIANT DISABLER
            variant_disabler([
              { 
                // lollypops
                source: "Architecture", 
                when: ['SAM', 'Whitestar', 'Spike 1', 'Spike 2'], 
                target: 'Kit', 
                disable: ['Pop Bumper Cap Kit (Clear)', 'Pop Bumper Cap Kit (ICE/Opaque)'] 
              } 
            ]);
            break;
          //-----------------------------------------------

  	  }
      
      // lazy images
      lazy_load_images();

	  // mailchimp & drift
	  scroll_debounce(mailchimp, true);
	  scroll_debounce(drift_load, true);

	}, 500);
  });

})();
