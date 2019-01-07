window.onload = function(){
  var btn = document.getElementById('scrolltop');
  var clientHeight = document.documentElement.clientHeight;

  window.onscroll = function(){
    var osTop = window.pageYOffset || document.documentElement.scrollTop;
    if (osTop >= clientHeight) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    };
  }
}