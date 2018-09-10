$(document).ready(function(){

	//_______________________________
	//
	//            UX
	//_______________________________

	//Page switching loader

	$('a').not('.no-loader').on('click',function(ev){
		//ev.preventDefault();
		$('body').prepend('<div class="pageLoader"><i class="fas fa-spinner"></i></div>');

	});

});