/*
 * 	Additional function for widgets.html
 *	Written by ThemePixels	
 *	http://themepixels.com/
 *
 *	Copyright (c) 2012 ThemePixels (http://themepixels.com)
 *	
 *	Built for Amanda Premium Responsive Admin Template
 *  http://themeforest.net/category/site-templates/admin-templates
 */

jQuery(document).ready(function(){
	
	//datepicker
	jQuery('#datepicker').datepicker();
	
	//show tabbed widget
	jQuery('#tabs').tabs();
	
	//accordion
	jQuery('#accordion').accordion();
	
	//content slider
	jQuery('#slidercontent').bxSlider({
		prevText: '',
		nextText: ''
	});
	
	//slim scroll
    jQuery('#scroll1').slimscroll({
        color: '#666',
        size: '6px',
        width: 'auto',
        height: '400px'                  
    });
	
	///// Tipsy Tooltip /////
	$('.tipN').tipsy({gravity: 'n',fade: true, html:true});
	$('.tipS').tipsy({gravity: 's',fade: true, html:true});
	$('.tipW').tipsy({gravity: 'w',fade: true, html:true});
	$('.tipE').tipsy({gravity: 'e',fade: true, html:true});

});

