//smooth scroll

var linkNav = document.querySelectorAll('[href^="#nav"]'),
    V = .3;  // СЃРєРѕСЂРѕСЃС‚СЊ, РјРѕР¶РµС‚ РёРјРµС‚СЊ РґСЂРѕР±РЅРѕРµ Р·РЅР°С‡РµРЅРёРµ С‡РµСЂРµР· С‚РѕС‡РєСѓ
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].onclick = function(){
    var w = window.pageYOffset,
        hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
        start = null;
    requestAnimationFrame(step);
    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
          r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
      window.scrollTo(0,r);
      if (r != w + t) {requestAnimationFrame(step)} else {location.hash = hash}
    }
    return false;
  }
}


//dynamic active in nav

window.addEventListener('scroll', function(e) {
  var nav = document.querySelectorAll('[id^="nav"]');
  for (var i = 0; i < nav.length; i++) {
    document.querySelector('a[href="#' + nav[i].id + '"]').className=((1 >= nav[i].getBoundingClientRect().top && nav[i].getBoundingClientRect().top >= 1-nav[i].offsetHeight) ? 'active' : '');
  }
}, false);