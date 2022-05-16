var $window = $(window);
var windowHeight = $window.height();
var windowWidth = $window.width();
var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

//開始時
$(document).ready(function(){	

});//READY END

//載入後
$window.load(function(){
	//LocalScroll
	$('a[href*=#]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target
			|| $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body')
				.animate(
					{scrollTop: targetOffset},
					{ duration:1000, easing: 'swing'}
				);
				return false;
			}
		}
	});
});//LOAD END

//變更視窗尺寸時
$window.resize(function(){

});//RESIZE END

//捲動視窗
$window.bind('scroll',function(){

});

//變更尺寸及捲動視窗時
$window.bind('scroll resize',function(){});

//變更視窗尺寸後,毫秒
$window.debounce("resize", function() {

}, 500);

//捲動視窗後,毫秒
$window.debounce("scroll", function() {
	
}, 300);
