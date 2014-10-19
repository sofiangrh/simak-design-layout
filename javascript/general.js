
jQuery(document).ready(function(){
	
							
	///// SHOW/HIDE USERDATA WHEN USERINFO IS CLICKED ///// 
	
	jQuery('.userinfo').click(function(){
		if(!jQuery(this).hasClass('active')) {
			jQuery('.userinfodrop').show();
			jQuery(this).addClass('active');
		} else {
			jQuery('.userinfodrop').hide();
			jQuery(this).removeClass('active');
		}
		//remove notification box if visible
		jQuery('.notification').removeClass('active');
		jQuery('.noticontent').remove();
		
		return false;
	});
	
	
	///// SHOW/HIDE SUBMENU NAVGATION WHEN IS CLICKED ///// 
	
	jQuery('.submenuDrop').click(function(){
		if(!jQuery(this).hasClass('active')) {
			jQuery('.userinfodrop2').show();
			jQuery(this).addClass('active');
		} else {
			jQuery('.userinfodrop2').hide();
			jQuery(this).removeClass('active');
		}
		//remove notification box if visible
		jQuery('.notification').removeClass('active');
		jQuery('.noticontent').remove();
		
		return false;
	});
	
	
	///// SHOW/HIDE NOTIFICATION /////
	
	jQuery('.notification a').click(function(){
		var t = jQuery(this);
		var url = t.attr('href');
		if(!jQuery('.noticontent').is(':visible')) {
			jQuery.post(url,function(data){
				t.parent().append('<div class="noticontent">'+data+'</div>');
			});
			//this will hide user info drop down when visible
			jQuery('.userinfo').removeClass('active');
			jQuery('.userinfodrop').hide();
		} else {
			t.parent().removeClass('active');
			jQuery('.noticontent').hide();
		}
		return false;
	});
	
	
	
	///// SHOW/HIDE BOTH NOTIFICATION & USERINFO WHEN CLICKED OUTSIDE OF THIS ELEMENT /////


	jQuery(document).click(function(event) {
		var ud = jQuery('.userinfodrop');
		var nb = jQuery('.noticontent');
		
		//hide user drop menu when clicked outside of this element
		if(!jQuery(event.target).is('.userinfodrop') 
			&& !jQuery(event.target).is('.userdata') 
			&& ud.is(':visible')) {
				ud.hide();
				jQuery('.userinfo').removeClass('active');
		}
		
		//hide notification box when clicked outside of this element
		if(!jQuery(event.target).is('.noticontent') && nb.is(':visible')) {
			nb.remove();
			jQuery('.notification').removeClass('active');
		}
		
		
		
		// submenuDrop 
		jQuery(document).click(function(event) {
		var ud = jQuery('.userinfodrop2');
		var nb = jQuery('.noticontent');
		
		//hide user drop menu when clicked outside of this element
		if(!jQuery(event.target).is('.userinfodrop2') 
			&& !jQuery(event.target).is('.userdata') 
			&& ud.is(':visible')) {
				ud.hide();
				jQuery('.submenuDrop').removeClass('active');
		}
		
		//hide notification box when clicked outside of this element
		if(!jQuery(event.target).is('.noticontent') && nb.is(':visible')) {
			nb.remove();
			jQuery('.notification').removeClass('active');
		}
		
		});
		
	});
	
	
	///// NOTIFICATION CONTENT /////
	
	jQuery('.notitab a').live('click', function(){
		var id = jQuery(this).attr('href');
		jQuery('.notitab li').removeClass('current'); //reset current 
		jQuery(this).parent().addClass('current');
		if(id == '#messages')
			jQuery('#activities').hide();
		else
			jQuery('#messages').hide();
			
		jQuery(id).show();
		return false;
	});
	
	
	
	///// SHOW/HIDE VERTICAL SUB MENU /////	
	
	jQuery('.vernav > ul li a, .vernav2 > ul li a').each(function(){
		var url = jQuery(this).attr('href');
		jQuery(this).click(function(){
			if(jQuery(url).length > 0) {
				if(jQuery(url).is(':visible')) {
					if(!jQuery(this).parents('div').hasClass('menucoll') &&
					   !jQuery(this).parents('div').hasClass('menucoll2'))
							jQuery(url).slideUp();
				} else {
					jQuery('.vernav ul ul, .vernav2 ul ul').each(function(){
							jQuery(this).slideUp();
					});
					if(!jQuery(this).parents('div').hasClass('menucoll') &&
					   !jQuery(this).parents('div').hasClass('menucoll2'))
							jQuery(url).slideDown();
				}
				return false;	
			}
		});
	});
	
	
	///// SHOW/HIDE SUB MENU WHEN MENU COLLAPSED /////
	jQuery('.menucoll > ul > li, .menucoll2 > ul > li').live('mouseenter mouseleave',function(e){
		if(e.type == 'mouseenter') {
			jQuery(this).addClass('hover');
			jQuery(this).find('ul').show();	
		} else {
			jQuery(this).removeClass('hover').find('ul').hide();	
		}
	});
	
	
	///// HORIZONTAL NAVIGATION (AJAX/INLINE DATA) /////	
	
	jQuery('.hornav a').click(function(){
		
		//this is only applicable when window size below 450px
		if(jQuery(this).parents('.more').length == 0)
			jQuery('.hornav li.more ul').hide();
		
		//remove current menu
		jQuery('.hornav li').each(function(){
			jQuery(this).removeClass('current');
		});
		
		jQuery(this).parent().addClass('current');	// set as current menu
		
		var url = jQuery(this).attr('href');
		if(jQuery(url).length > 0) {
			jQuery('.contentwrapper .subcontent').hide();
			jQuery(url).show();
		} else {
			jQuery.post(url, function(data){
				jQuery('#contentwrapper').html(data);
				jQuery('.stdtable input:checkbox').uniform();	//restyling checkbox
			});
		}
		return false;
	});
	
	
	///// SEARCH BOX WITH AUTOCOMPLETE /////
	
	var availableTags = [
			"ActionScript",
			"AppleScript",
			"Asp",
			"BASIC",
			"C",
			"C++",
			"Clojure",
			"COBOL",
			"ColdFusion",
			"Erlang",
			"Fortran",
			"Groovy",
			"Haskell",
			"Java",
			"JavaScript",
			"Lisp",
			"Perl",
			"PHP",
			"Python",
			"Ruby",
			"Scala",
			"Scheme"
		];
	jQuery('#keyword').autocomplete({
		source: availableTags
	});
	
	
	///// SEARCH BOX ON FOCUS /////
	
	jQuery('#keyword').bind('focusin focusout', function(e){
		var t = jQuery(this);
		if(e.type == 'focusin' && t.val() == 'Enter keyword(s)') {
			t.val('');
		} else if(e.type == 'focusout' && t.val() == '') {
			t.val('Enter keyword(s)');	
		}
	});
	
	
	///// NOTIFICATION CLOSE BUTTON /////
	
	jQuery('.notibar .close').click(function(){
		jQuery(this).parent().fadeOut(function(){
			jQuery(this).remove();
		});
	});
	
	///// COLLAPSED/EXPAND LEFT MENU /////
           
           
        /*
         * function for COLLAPSED/EXPAND LEFT MENU
         */
        function expand_mode(){
            if(jQuery('.vernav').length > 0) {
                    if(jQuery('.vernav').hasClass('iconmenu')) {
                            jQuery('body').removeClass('withmenucoll');
                            jQuery('.iconmenu').removeClass('menucoll');
                    } else {
                            jQuery('body').removeClass('withmenucoll');
                            jQuery('.vernav').removeClass('menucoll').find('ul').show();
                    }
            } else if(jQuery('.vernav2').length > 0) {	
                    jQuery('body').removeClass('withmenucoll2');
                    jQuery('.iconmenu').removeClass('menucoll2');
            }
       
        }
	function collapsed_mode(){
            if(jQuery('.vernav').length > 0) {
                    if(jQuery('.vernav').hasClass('iconmenu')) {
                            jQuery('body').addClass('withmenucoll');
                            jQuery('.iconmenu').addClass('menucoll');
                    } else {
                            jQuery('body').addClass('withmenucoll');
                            jQuery('.vernav').addClass('menucoll').find('ul').hide();
                    }
            } else if(jQuery('.vernav2').length > 0) {
                    jQuery('body').addClass('withmenucoll2');
                    jQuery('.iconmenu').addClass('menucoll2');
            }

            

            jQuery('.iconmenu > ul > li > a').each(function(){
                    var label = jQuery(this).text();
                    jQuery('<li><span>'+label+'</span></li>')
                            .insertBefore(jQuery(this).parent().find('ul li:first-child'));
            });            
        }
        
        if(jQuery('.togglemenu').hasClass('togglemenu_collapsed')) {
            collapsed_mode();
        } else { 			
            expand_mode();
        }        
	
	///// RESPONSIVE /////
	if(jQuery(document).width() < 640) {
		jQuery('.togglemenu').addClass('togglemenu_collapsed');
		if(jQuery('.vernav').length > 0) {
			
			jQuery('.iconmenu').addClass('menucoll');
			jQuery('body').addClass('withmenucoll');
			jQuery('.centercontent').css({marginLeft: '56px'});
			if(jQuery('.iconmenu').length == 0) {
				jQuery('.togglemenu').removeClass('togglemenu_collapsed');
			} else {
				jQuery('.iconmenu > ul > li > a').each(function(){
					var label = jQuery(this).text();
					jQuery('<li><span>'+label+'</span></li>')
						.insertBefore(jQuery(this).parent().find('ul li:first-child'));
				});		
			}

		} else {
			
			jQuery('.iconmenu').addClass('menucoll2');
			jQuery('body').addClass('withmenucoll2');
			jQuery('.centercontent').css({marginLeft: '36px'});
			
			jQuery('.iconmenu > ul > li > a').each(function(){
				var label = jQuery(this).text();
				jQuery('<li><span>'+label+'</span></li>')
					.insertBefore(jQuery(this).parent().find('ul li:first-child'));
			});		
		}
	}
	
	
	jQuery('.searchicon').live('click',function(){
		jQuery('.searchinner').show();
	});
	
	jQuery('.searchcancel').live('click',function(){
		jQuery('.searchinner').hide();
	});
	
	
	
	///// ON LOAD WINDOW /////
	function reposSearch() {
		if(jQuery(window).width() < 520) {
			if(jQuery('.searchinner').length == 0) {
				jQuery('.search').wrapInner('<div class="searchinner"></div>');	
				jQuery('<a class="searchicon"></a>').insertBefore(jQuery('.searchinner'));
				jQuery('<a class="searchcancel"></a>').insertAfter(jQuery('.searchinner button'));
			}
		} else {
			if(jQuery('.searchinner').length > 0) {
				jQuery('.search form').unwrap();
				jQuery('.searchicon, .searchcancel').remove();
			}
		}
	}
	reposSearch();
	
	///// ON RESIZE WINDOW /////
	jQuery(window).resize(function(){
		
		if(jQuery(window).width() > 640)
			jQuery('.centercontent').removeAttr('style');
		
		reposSearch();
		
	});
	
	
	///// Tipsy Tooltip /////
	$('.tipN').tipsy({gravity: 'n',fade: true, html:true});
	$('.tipS').tipsy({gravity: 's',fade: true, html:true});
	$('.tipW').tipsy({gravity: 'w',fade: true, html:true});
	$('.tipE').tipsy({gravity: 'e',fade: true, html:true});

});
