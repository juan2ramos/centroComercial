(function ($){
		   var self = $.mobile.ParkingCOL = {
			transition: 'none',
			checkTransition: function() {
				$.mobile.defaultPageTransition= self.transition;	
			},
			init: function(){
				self.checkTransition();	
				$(document).bind('pageinit',function(){
													 console.log('pageinit');
		$('#transition').change(function(){
	self.transition = $(this).val();
	self.checkTransition();
												 });
		
		});
				
				
				
				
			}
		   };
		   
		   self.init();
})(jQuery)