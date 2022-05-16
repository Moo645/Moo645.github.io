//瀑布牆
var $container = $('.box_list');
$container.imagesLoaded( function(){
  $container.masonry({
    itemSelector : '.box',
  });
});

$(document).ready(function(){
    $(window).resize(function() {
        wdth=$(window).width();
				location.reload();
      $("span").text(wdth);
    });
});