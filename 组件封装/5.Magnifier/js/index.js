window.onload=function(){
    var smallBox=document.getElementById("smallBox");
    var bigBox=document.getElementById("bigBox");
    var floatBox=document.getElementById("floatBox");
    var bigImg=bigBox.getElementsByTagName("img")[0];
    smallBox.onmouseover=function(){
       floatBox.style.display = "block";
       bigBox.style.display = "block";
    }
    smallBox.onmouseout=function(){
       floatBox.style.display = "none";
       bigBox.style.display = "none";
    }
    smallBox.onmousemove=function(event){
        var e=event||window.event;
        // clientX:鼠标相对于页面的像素值
        // offsetLeft:获取的是当前对象左侧距离父对象左侧的值(均不包含border)
        // offsetWidth 获取对象相对于版面或由父坐标 offsetParent 属性指定的父坐标的高度
        var left= e.clientX-smallBox.offsetLeft-floatBox.offsetWidth/2;
        var top = e.clientY-smallBox.offsetTop-floatBox.offsetHeight/2;
        if (left < 0) {
            left = 0;
        } else if (left > (smallBox.offsetWidth - floatBox.offsetWidth)) {
            left = smallBox.offsetWidth - floatBox.offsetWidth;
        }

        if (top < 0) {
            top = 0;
        } else if (top > (smallBox.offsetHeight - floatBox.offsetHeight)){
            top = smallBox.offsetHeight - floatBox.offsetHeight;
        }
        // 左边遮罩随鼠标移动移动
        floatBox.style.left=left+"px";
        floatBox.style.top=top+"px";

        // 右侧图片随着左侧遮罩移动而移动
        bigImg.style.left=-(left*bigBox.offsetWidth)/smallBox.offsetWidth+"px";
        bigImg.style.top=-(top*bigBox.offsetHeight)/smallBox.offsetHeight+"px";
    }
}