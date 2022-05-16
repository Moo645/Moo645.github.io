//手機板選單切換

//300 滑動速度
//1199 螢幕寬度 (當螢幕超過這個寬度時候，選單會回到電腦版樣式，如果寬度不對會造成網頁顯示錯誤，或是平板選單過長無法下拉的問題。)

$(function(){

	$("#m_top_menu").on("click", OPENOPEN );
	
	function OPENOPEN(){
		$("#top_menu").slideToggle(300);
	}
	
	$(window).on("resize",CLEARSTYLE);
	
	function CLEARSTYLE(){
		if($(window).innerWidth()>1199){
			$("#top_menu").attr("style","");
		}
	}
	
});
