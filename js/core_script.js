$(document).ready(function(){	
			
			$("div.item").mouseover(function(){
				$(this).css({'cursor':'pointer'});
			});
			
			$(".item").click(function(){
				$time = 300;
				$(this).next().slideToggle($time);
				$(this).next().siblings(".item_cont").slideUp($time);
			});
		});