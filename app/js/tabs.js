$(document).ready(function() {
	$('.tabs__button__link').on ('click', function(e) {
		e.preventDefault();
		var item = $(this).closest('.tabs__button'),
				contentItem = $('.tab__content__item'),
				itemPosition = item.index();
				contentItem.eq(itemPosition)
					.add(item)
					.addClass('active')
					.siblings().removeClass('active');
	});
});