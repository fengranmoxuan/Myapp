$(function(){
	setInterval(function(){
		var height=$(window).height()+'px';
		$('.content').css('height',height);
	},100);
})