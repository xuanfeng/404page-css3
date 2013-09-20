$(function(){
	var time=setTimeout(function(){
		$("#duobei").css({
			"-webkit-transform": "rotate(-30deg) scale(0.5)",
		});
	},2000);

	$("#title").hide();
	var title=setTimeout(function(){
		$("#title").addClass("title_move");
		$("#title").show();
	},3400);

	var duobeiWrap=setTimeout(function(){
		// $("#duobei_wrap").css({"float":"left"});
	},3400);
})
