//常見問題QA常用點開往下展開方式
$(function(){
    
	$('.op_top').click(function(){
		$('.op_top').removeClass('cur')
		$('.op_don').slideUp(500);
		$(this).addClass('cur')
		$(this).next('.op_don').stop(false,true).slideDown(800);
		return false;
	}).eq(0).click();

}); 

