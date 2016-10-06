// NAVIGATION
var TOP_OFFSET = 0;

function PageNav(button) {
	switch(button) {
		case 0:
			$("html, body").animate({ scrollTop: 0 }, "slow");
			return false;
			break;
		case 1:
			var pos = $('#about').offset().top - TOP_OFFSET;
			$("html, body").animate({ scrollTop: pos }, "slow");
			return false;
			break;
		case 2:
			var pos = $('#work').offset().top - TOP_OFFSET;
			$("html, body").animate({ scrollTop: pos }, "slow");
			return false;
			break;
		case 3:
			var pos = $('#contact').offset().top - TOP_OFFSET;
			$("html, body").animate({ scrollTop: pos }, "slow");
			return false;
			break;
	}
}

$(window).scroll(function() {

	var height = $(window).scrollTop();
	var about_pos = $('#about').offset().top - TOP_OFFSET - 2;
	var work_pos = $('#work').offset().top - TOP_OFFSET - 2;
	var contact_pos = $(document).height() - Math.max( $('#contact').height(), $(window).height() ) - TOP_OFFSET - 2;
	var child = 0;
	if (height < about_pos) {
		child = 1;
		$('#navbar-list li').removeClass('active');
		$('#navbar-list > li:nth-child(' + child + ')').addClass('active');
	}
	else if (height > about_pos && height < work_pos) {
		child = 2;
		$('#navbar-list li').removeClass('active');
		$('#navbar-list > li:nth-child(' + child + ')').addClass('active');
	}
	else if (height > work_pos && height < contact_pos) {
		$('#scroll_tour').hide();
		child = 3;
		$('#navbar-list li').removeClass('active');
		$('#navbar-list > li:nth-child(' + child + ')').addClass('active');
	}
	else if (height > contact_pos) {
		child = 4;
		$('#navbar-list li').removeClass('active');
		$('#navbar-list > li:nth-child(' + child + ')').addClass('active');
	}
});