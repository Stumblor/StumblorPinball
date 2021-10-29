var html = `
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
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
  position: relative;  
  transition: filter ease-in-out 0.2s, zoom ease-in-out 0.2s;
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
setTimeout(() => {
  var divNode = document.createElement("div");
  divNode.innerHTML = style;
  document.body.appendChild(divNode);

  // insert carousel
  $('#carousel')[0].innerHTML = html;

  $('.logo-carousel').slick({
    //autoplay: false,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 0,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    pauseOnHover: false,
    responsive: [{ breakpoint: 520, settings: { slidesToShow: 2 } }]
  });
}, 2000);
