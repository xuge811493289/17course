window.onload = function(){
  var i = 0;
  var img = document.getElementsByClassName("img")[0];
  var olPoint = document.getElementById("ol");
  var carousel = document.getElementById("carousel");
  var lis = Array.prototype.slice.call(olPoint.children);
  var rightBtn = document.getElementById('carousel_rightBtn');
  var leftBtn = document.getElementById('carousel_leftBtn');
  // 从后台请求回来的图片
  var arr = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg"];
  // 自动轮播
  var timeId 
  timeId = setInterval(autoPlay,2000);

  // 鼠标划入的时候停止间歇调用，鼠标划出的时候重新间歇调用
  carousel.onmouseover = function(){
    clearInterval(timeId);
  }
  carousel.onmouseout = function(){
    timeId = setInterval(autoPlay,2000);
  }

  // 向右切换
  rightBtn.onclick = function(){
    if (i == olPoint.children.length-1){
      i = 0;
    }else{
      i++;
    }
    imgPoint();
  }

  // 向左切换
  leftBtn.onclick = function(){
    if (i == 0){
      i = 4;
    }else{
      i--;
    }
    imgPoint();
  }

  // 点击切换
  for(var k = 0; k < lis.length; k++){
    (function(k){
      lis[k].onclick = function(){
        i = k;
        imgPoint();
      }
    })(k);
  }

  // 更换图片和更换圆点背景颜色
  function imgPoint(){
    img.src = arr[i];
    for (var j = 0; j < lis.length; j++) {
      lis[j].className = "";
    }
    lis[i].className = "current";
  }
  function autoPlay(){
    if(i < arr.length-1){
      i++;
    }else{
      i=0;
    }
    imgPoint()
  }
}