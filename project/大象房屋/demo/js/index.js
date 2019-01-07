
$(function(){
	/*1.第一组轮播*/
	$("#pro-c1 ul li:nth-child(2)").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur")
		$("#carouse11").animate({left:"-1200px"});
	})
	setInterval(function(){$("#pro-c1 ul li:nth-child(2)").trigger('click')},3000)
	$("#pro-c1 ul li:nth-child(1)").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur")
		$("#carouse11").animate({left:"0px"});
	})
	setInterval(function(){$("#pro-c1 ul li:nth-child(1)").trigger('click')},6000)

    /*第二组轮播*/
	$(".article7 .pro-c ul li:nth-child(1)").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur")
		$("section .article6 .outer").animate({left:"-1200px"});
	})
	setInterval(function(){$('.article7 .pro-c ul li:nth-child(1)').trigger('click')},3000)
	$(".article7 .pro-c ul li:nth-child(2)").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur")
		$("section .article6 .outer").animate({left:"0px"});
	})
	setInterval(function(){$('.article7 .pro-c ul li:nth-child(2)').trigger('click')},6000);

	/*第三组轮播*/
	$(".article8 .pro-c ul li:nth-child(1)").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur")
		$(".ag-loop .cz-c ul").animate({left:"-1000px"});
	})
	setInterval(function(){$(".article8 .pro-c ul li:nth-child(1)").trigger('click')},3000)
	
	$(".article8 .pro-c ul li:nth-child(2)").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur")
		$(".ag-loop .cz-c ul").animate({left:"0px"});
	})
	setInterval(function(){$(".article8 .pro-c ul li:nth-child(2)").trigger('click')},6000);
})
