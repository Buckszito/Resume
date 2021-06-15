/*
Author       : Obakeng Bosvark
Template Name: Prince - Personal CV/Resume Template
Version      : 1.0
*/
(function($)
{
	"use strict";
	
	//========================= preloader ================
	$(window).on('load', function() {
		preloader();
	})
	
	//JQuery for page scrolling feature - requires JQuery Easing plugin
	$(document).on('ready', function () {
		Boxlayout.init();	
	});
	
	// Video player
	$('.player').mb_YTPlayer();
	
	//============= Preload ============ 
	function preloader(){
		$(".preloaderimg").fadeOut();
		$(".preloader").delay(300).fadeOut("slow").delay(300, function(){
			$(this).remove();
		});
	}
		
})(jQuery);	


	
