$(document).ready(function() {
	$('.trigger').on ('click', function(e) {
		e.preventDefault();
		var $this = $(this),
				item = $this.closest('.menu__item'),
				list = $this.closest('.menu')
				items = list.find('.menu__item'),
				sublist = item.find('.sub_menu'),
				otherContent = list.find('.sub_menu'),
				duration = 300;


		if (!item.hasClass('active')) {
			items.removeClass('active');
			item.addClass('active');
			otherContent.stop(true,true).slideUp(duration);
			sublist.stop(true,true).slideDown(duration);
		}		
		else {
			sublist.stop(true,true).slideUp(duration);
			item.removeClass('active');
		}	
	});

	$('#hamburger').on ('click', function(e) {
		e.preventDefault();
		$('.menu').slideToggle(300);
		$(this).find('svg').toggleClass('active');
		sublist.stop(true,true).slideUp(duration);
			item.removeClass('active');
	});
});