$( document ).ready(function() {
 $('.portfolio-thumbnail').click(function(e){
 	e.preventDefault;
	var drawerContent = $(this).next('.portfolio-drawer');
	var pushIt = $(this).parent().parent().next('.push-it');

	drawerContent.toggleClass('hide');

	if (window.innerWidth >= 768) {
		pushIt.toggleClass('push-it-real-good');
	}

	if (!drawerContent.hasClass('hide')) { // if open
		$('.portfolio-drawer').addClass('hide'); // hide all others
		drawerContent.removeClass('hide');
		
		if (window.innerWidth >= 768) {
			$('.push-it').removeClass('push-it-real-good');
			pushIt.addClass('push-it-real-good');
		}
    };
  }); 
});
