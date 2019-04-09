var byu_header = (function() {

	'use strict';

	var doc = document; // Put this in a variable to enable smaller compression
	var jsInitClass = 'js-enabled';
	var expandedAttr = 'aria-expanded';
	var menuOpenClass = 'menu-open';

	// Execute the initialize function
	byu_main.executeOnLoad( init );





	/*
	 * Func: init
	 * Desc: Initialize the header button for all BYU headers on page
	 * 		 (handles multiple heders )
	 * Args: none
	 */
	function init() {

		var headerEls = doc.getElementsByClassName('byu-header');

		Array.prototype.forEach.call(headerEls, function(el) {
			enableMobileMenu( el );
		});

	} // init




	/*
	 * Func: enableMobileMenu
	 * Desc: Initialize the header button
	 * Args: headerEl - HTML Element - Probably the <header>
	 */
	function enableMobileMenu( headerEl ) {

		var showMenuButton = byu_main.elExists('byu-site-navigation', headerEl) || byu_main.hasChildren('byu-action-id-search', headerEl);

		if ( showMenuButton ) {
			headerEl.addClass(jsInitClass);
			initMenuButton( headerEl );
		}

	} // enableMobileMenu



	function initMenuButton( headerEl ) {
		var menuButton = headerEl.getElementsByClassName('byu-menu-button')[0];

		menuButton.addEventListener('click', function(e){
			clickMenuButton( e.target, headerEl );
		});
	}


	function clickMenuButton( btn, headerEl ) {
		var open = btn.getAttribute(expandedAttr) != 'false';
		var opening = false;
		
		if ( !open && !opening ) {
			openMenu( btn, headerEl );
		}

		else {
			closeMenu( btn, headerEl );
		}
	}


	function openMenu( btn, headerEl ) {
		btn.setAttribute(expandedAttr, true);
		if ( !headerEl.hasClass( menuOpenClass ) ) {
			headerEl.addClass( menuOpenClass )		
		}
	}

	function closeMenu( btn, headerEl ) {
		btn.setAttribute(expandedAttr, false);
		headerEl.removeClass( menuOpenClass );
	}


})();