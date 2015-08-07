<!-- master default -->
<link rel="canonical" href="http://mestreesquilo.com/"/>
<link rel="stylesheet" type="text/css" href="/css/flexslider.css" />
<link rel="stylesheet" type="text/css" href="/css/jquery.fancybox-1.3.4.css"/>
<link rel="stylesheet" type="text/css" href="/css/style.css" />
<link rel="stylesheet" type="text/css" href="/css/epicslider.css" />
<link rel="stylesheet" type="text/css" href="/css/udt_shortcodes.css" />
<link rel="stylesheet" type="text/css" href="/css/udt_media_queries.css" />
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,800' rel='stylesheet' type='text/css' />
<link href='http://fonts.googleapis.com/css?family=Quicksand' rel='stylesheet' type='text/css' />
<!-- master default -->
<title>Charlotte Capoeira - Mestre Esquilo</title>
<script type="text/javascript" src="/js/iOS-timer.js"></script>
<script type="text/javascript" src="/js/jquery.min.js"></script>
<script type="text/javascript" src="/js/jquery-ui.min.js"></script>
<script type="text/javascript" src="/js/jquery.mobile-touch-swipe-1.0.js"></script>
<script type="text/javascript" src="/js/jquery.epicslider.js"></script>
<script type="text/javascript" src="/js/jquery.flexslider-min.js"></script>
<script type="text/javascript" src="/js/jquery.ajaxloading.js"></script>
<script type="text/javascript" src="/js/jquery.lazyload.js"></script>
<script type="text/javascript" src="/js/waypoints.min.js"></script>   
<script type="text/javascript" src="/js/jquery.parallax-1.1.3.js"></script>
<script type="text/javascript" src="/js/onepage.js"></script>
<script type="text/javascript" src="/js/jquery.fancybox-1.3.4.pack.js"></script>
<script type="text/javascript" src="/js/jquery.gridalicious.min.js"></script>
<script type="text/javascript" src="/js/jcarousel.js"></script>
<script type="text/javascript" src="/js/jquery.jstwitter.js"></script>
<script type="text/javascript" src="/js/common.js"></script>
<script type="text/javascript" src="/js/contact.js"></script>
<script type="text/javascript" src="/js/jquery.cycle.all.js"></script>
<script type="text/javascript" src="/js/letthemcycle.js?version=1"></script>
<script type="text/javascript">

            var isMobile = false;
    
            if( navigator.userAgent.match(/Android/i) || 
                navigator.userAgent.match(/webOS/i) ||
                navigator.userAgent.match(/iPhone/i) || 
                navigator.userAgent.match(/iPad/i)|| 
                navigator.userAgent.match(/iPod/i) || 
                navigator.userAgent.match(/BlackBerry/i)){
                                
                isMobile = true;
                            
            }
            
            /*iOS5 fixed-menu fix*/
            var iOS5 = false;
            
            if (navigator.userAgent.match(/OS 5(_\d)+ like Mac OS X/i)){
            
                iOS5 = true;
            
            }
        
            $(window).load(function() {
            
                //call slider
                $('.epicSlider').epicSlider({
                
                    loop : true,                                    //Boolean: whether slideshow should loop or not 
                    slideShow: true,                                //Boolean: use slideshow or not
                    autoPlay: false,                                //Boolean: autoplay uplon load or not
                    slideShowInterval :3500,                        //Integer: slideshow cycling speed, in milliseconds
                    transitionSpeed : 1000,                         //Integer: transitions speed, in milliseconds
                    startSlide : 0,                                 //Integer: starts at 0
                    shuffleSlides:false,                            //Boolean: shuffle slides or not
                    stack:false,                                    //Boolean:stack slides
                    easing : 'easeInOutQuint',                      //String: easing method - see http://jqueryui.com/demos/effect/easing.html
                    fx : 'fade',                                    //String: none, fade, leftToRight, topToBottom 
                    fxmobile : 'leftToRight',                       //String: mobile effect -  none, fade, leftToRight, topToBottom 
                    pattern :true                                   //Boolean: add pattern or not

                }); 
                
                
            });
</script>