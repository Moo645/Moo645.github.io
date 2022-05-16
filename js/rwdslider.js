//RWD多則數輪播slider - 首頁產品輪播
$('.owl-carousel').owlCarousel({
    loop:false,/*則數是否重複顯示，是true,否false*/
    margin:20,/*則數之間空格大小*/
    nav:true,/*左右箭頭是否顯示，是true,否false*/
    responsive:{
        0:{ items:1,
				loop:true,
				autoplay:true,
				autoplayTimeout:5000, },
				500:{ items:2,
				loop:true,
				autoplay:true,
				autoplayTimeout:5000, },
				700:{ items:3,
				loop:true,
				autoplay:true,
				autoplayTimeout:5000, },
        960:{  items:4,
				loop:true,
				autoplay:true,
				autoplayTimeout:5000, },
        1200:{ items:5,/*寬度1200以上顯示則數5*/
				loop:true,/*則數是否重複顯示，是true,否false*/
				autoplay:true,/*是否自動輪播，是true,否false*/
				autoplayTimeout:5000,/*多久時間移動一則*/ }
    }/*RWD 控制寬度多少以上，顯示則數幾則*/
});
