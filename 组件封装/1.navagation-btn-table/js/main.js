$(function(){
  $(".nav").on("click","div.item",function(e){
    $(this).addClass("current").siblings().removeClass("current");
    if(e.target.innerHTML=="首页"){
      $(".page1").slideDown(1000).siblings(".page").hide();
    }else if(e.target.innerHTML=="html"){
      $(".page2").slideDown(1000).siblings(".page").hide();
    }
  })
})