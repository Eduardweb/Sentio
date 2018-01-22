(function () {

// video Bg index page
  var vid = document.getElementById("bgvid");
  if (window.matchMedia('(prefers-reduced-motion)').matches) {
      vid.removeAttribute("autoplay");
  }

  function vidFade() {
    vid.classList.add("stopfade");
  }

  vid.addEventListener('ended', function()
  {
  // only functional if "loop" is removed 
  // to capture IE10
  vidFade();
  }); 
// End video Bg index page

})();
