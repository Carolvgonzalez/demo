$(document).ready(function() {
	$(".c").mouseenter(function(){
		$(this).css("background-color", "yellow");
	});
	$(".c").mouseleave(function(){
		$(this).css("background-color","white");
	})
});