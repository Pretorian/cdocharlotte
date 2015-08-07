/*-------------------------------------------------------------------------

	Theme Name: EGO - html - v.1.2
	
	For any questions concerning this theme please refer to documention or
	our forum at support.udfrance.com.

/*------------------------------------------------------------------------

//GENERAL FUNCTONS ///////////////////////////////////////////////////////

-------------------------------------------------------------------------*/

	

/*
	//slideshow found in history page
if ($('#jstwitter').length>0) {  
	$('#jstwitter').after('<div id="dots">').cycle({ 
	fx:     'none', 
	speed:  'fast', 
	timeout: 7000,
	pager:  '#dots'
	});
};
*/              
$(document).ajaxSuccess(function() {
  if ($('ul#jstwitter li').length<1) {  
  //Alert ("alert load");
  console.info("loading plan b to cycle tweets on ajaxsuccess ready, for "+$('ul#jstwitter').length);
  $('#jstwitter').after('<div id="dots">').cycle({ 
    fx:     'none', 
    speed:  'fast', 
    timeout: 7000,
    pager:  '#dots'
  });
}
});    
  

 