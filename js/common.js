/*-------------------------------------------------------------------------

	Theme Name: EGO - html - v.1.2
	
	For any questions concerning this theme please refer to documention or
	our forum at support.udfrance.com.

/*------------------------------------------------------------------------

//GENERAL FUNCTONS ///////////////////////////////////////////////////////

-------------------------------------------------------------------------*/

$(document).ready(function(){
						   
	
	/*vars used throughout*/
	var thumb = $('.thumb,.round-thumb'),
		thumbW,
		thumbH,
		thumbCaption,
		target,
		hoverSpeed=500,
		hoverEase='easeOutExpo',
	 	targetNetwork =$('ul.socialSmall li a'),
		toggleMenu =$('.mobileMenuToggle'),
		lightboxTransition = 'fade',				//Set lightbox transition type
	 	overlayOpacity =0.8,						//Fancybox overlay opacity
	 	overlayColor = '#000',						//Fancybox overlay color	
	 	videoWidth = 650,							//Fancybox video width
	 	videoHeight = 365;							//Fancybox video height
		lazyload = true;


	
	//LAZY LOADING -------------------------------------------------------------------------/
		

  	$(function() {
		
		 if(lazyload==false || isMobile == true) return false;
			 
          $("img.lazy").lazyload({
             placeholder : "images/blank.gif",
             effect : "fadeIn"
          });
		  
     });
	
	
	//MOBILE MENU -----------------------------------------------------------------------/
	
	
	toggleMenu.on('click', function(event) {
									
		if($(this).parent().find('ul.navigation').is(':hidden')){
		
			$(this).parent().find('ul.navigation').slideDown();
			$(this).addClass('open');

			
		}else{
			
			$(this).parent().find('ul.navigation').slideUp();
			$(this).removeClass('open');
		
			
		}
		
		event.preventDefault();
									
	});
	
	
	//VIDEO RESIZE -------------------------------------------------------------------------/
	

	var resizeVideos = function() {
		$('.video').not('.project-display .video,.teaser .video').each(function() {
			$(this).height(($(this).width()/1.778)+'px');
			$(this).find('embed, object, iframe').height(($(this).width()/1.778)+'px').width($(this).width()+'px');
		});
	}
	
	$(window).bind('resize', function() {
		resizeVideos();
	});
	
	resizeVideos();
		

	//ROLLOVER SPECIFIC ---------------------------------------------------------------------/
		
		
	/*general
	-------------------*/
			
	thumb.on({

		 mouseenter: function () {
				 
			 //check if device is mobile 
			 //or within an inactive filter category
			 //or if its video content in which case do nothing
			 if(isMobile == true) return false;
			 
			 thumbW = thumb.find('a').find('img').width();
			 thumbH = thumb.find('a').find('img').height();
			 
			//get refrences needed
		 	thumbCaption = $(this).find('a').attr('title');
			
			//add rolloverscreen
			if(!$(this).find('a').find('div').hasClass('thumb-rollover')) $(this).find('a').append('<div class="thumb-rollover"></div>');
			
			
			//set it to the image size and fade in
			hoverScreen = $('.thumb-rollover')
			hoverScreen.css({width:thumbW,height:thumbH});

			
			//make sure caption is filled out
			if (typeof thumbCaption !== 'undefined' && thumbCaption !== false && $(this).find(hoverScreen).is(':empty')) {
				
				//construct rollover & animate
   				$(this).find(hoverScreen).append('<div class="thumbInfo">'+thumbCaption+'</div>');
				target = $(this).find(hoverScreen);
				target.stop().animate({opacity:1},hoverSpeed, hoverEase);
			}
			
		}, 
		
		  mouseleave: function () {
		
			if(isMobile == true) return false;
			
			//animate out
			$(this).find(hoverScreen).animate({opacity:0},hoverSpeed,hoverEase,function(){
	
					//delete rollover
				   $(this).remove();
				
			});
			
		
		 }
	
	  });
	
	
	
	JQTWEET.loadTweets();
	console.info("Tweetsloaded!");


	//LIGHTBOX SPECIFIC ---------------------------------------------------------------------/


	/*lightbox-img
	-------------------------------*/
	
	//if($('a.lightbox').length == 0) return false;
	
	$('a.lightbox').fancybox({
										   
			'transitionIn'		: lightboxTransition,
			'transitionOut'		: lightboxTransition,
			'titlePosition' 	: 'over',
			'padding'			: '0',																		
			'overlayOpacity'    : overlayOpacity,
			'overlayColor'      : overlayColor,
			'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {  
						
		
			var obj = currentArray[ currentIndex ] //get current image
			var target = $(obj).parent();		   //get its container	
		
		
			//CASE 1: thumb has associated html content
			if($(target).next().hasClass('fancybox-html')){
					
					
				//check if stack order should be displayed
									
				if ($(target).next().length && $(obj).attr('rel')){
										
						return  '<span id="fancybox-title-over">' + '<div class="fancybox-num"> Image:'+(currentIndex + 1) + ' / ' + currentArray.length+'</div>'+($(target).next().html()) + '</span>';
										
				}else {
											
						return  '<span id="fancybox-title-over">' + ($(target).next().html()) + '</span>';
										
				}
									
								
			//CASE 2:  thumb is a part of a group and has a title only
			} else if($(obj).attr('rel') && $(obj).attr('title')){
		
					return  '<span id="fancybox-title-over">' + '<div class="fancybox-num"> Image:'+ (currentIndex + 1) + ' / ' + currentArray.length + '</div> '+ (title.length?''+title:'') + '</span>';
									
								
			//CASE 3: thumb has no info but belongs to group
			} else if($(obj).attr('rel')) {
								
					return  '<span id="fancybox-title-over">' + '<div class="fancybox-num" style="margin-bottom:0px"> Image:'+(currentIndex + 1) + ' / ' + currentArray.length+'</div>'+'</span>';
								
								
			//CASE 4: thumb has a title only
			} else if($(obj).attr('title')) {
								
				//if image is not associated with group, hide image numbering
				return  '<span id="fancybox-title-over">' +(title.length ?''+title :'') + '</span>';
									
								
				//CASE 5: no info & does not belong to group
				}else{
									
				// hide title overlay
				$('#fancybox-title-over').hide();
									
				}
							
			},
						
						
			//animate image info on complete
			'onComplete':function(){
						
				//check for smallest breakpoints		
				if($(window).width()<=767){
	
			
					$('.fancybox-title-over').css({display:'none'});
					
				}else{
				
					$('.fancybox-title-over').hide().fadeIn('slow');
				
				}
						
			} 
						
			});
	
	
	/*lightbox-media
	-------------------------------*/
	
	$('a.lightbox-media').fancybox({
								   
        'transitionIn'        : lightboxTransition,
        'transitionOut'       : lightboxTransition,
		'padding'			  : '0',	
		'titlePosition'		  : 'outside',
		'width'			      : videoWidth,
		'height'			  : videoHeight,
		'overlayOpacity'      : overlayOpacity,
		'overlayColor'        : overlayColor,
        'autoscale'           : false,
        'type'                : 'iframe',
		'swf'           	  : {
		'wmode'               : 'transparent',
		'allowfullscreen'  	: 'true'},
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {  
						
		
			var obj = currentArray[ currentIndex ] //get current image
			var target = $(obj).parent();		   //get its container	
		
			if($(target).next().hasClass('fancybox-html')){
					
	
				return  '<span>' + ($(target).next().html()) + '</span>';
						
			
			};
		},
		
		//animate image info on complete
		'onComplete':function(){
						
				//check for smallest breakpoints		
				if($(window).width()<=767){
			
					$('.fancybox-title-outside').css({display:'none'});
					
				}else{
				
					$('.fancybox-title-outside').hide().fadeIn('slow');
					
				}
						
			}

       });
	

jQuery(window).load(function () {
    console.info("page is loaded, create tweets on window load, for "+$('ul#jstwitter li').le1gth);
    setTimeout(function () {
    	console.info("page is loaded and 2 secs have passed");   
        if($("#jstwitter li").length>0){
    		console.info(" setting timeout within common to create tweets on window load, for "+$('ul#jstwitter li').length +" tweets");
			$('#jstwitter').after('<div id="dots">').cycle({ fx:'none', speed:'fast', timeout: 7000, pager:  '#dots'});

        }else{
    		console.info("cannot create tweets with: "+$('ul#jstwitter li').length +" tweets");
    		$('#jstwitter').html('<h6><span>No one is tweeting check back soon...</span></h6>');
        	
        }
    
    }, 2000);

	});

    
});
