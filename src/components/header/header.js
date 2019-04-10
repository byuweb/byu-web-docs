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
	 * Args: @headerEl - HTML Element - The header that contains the mobile menu to enable
	 */
	function enableMobileMenu( headerEl ) {

		var showMenuButton = byu_main.elExists('byu-site-navigation', headerEl) || byu_main.hasChildren('byu-action-id-search', headerEl);

		if ( showMenuButton ) {
			headerEl.addClass(jsInitClass);
			initMenuButton( headerEl );
		}

	} // enableMobileMenu




	/*
	 * Func: initMenuButton
	 * Desc: 
	 * Args: @headerEl - HTML Element - The header element that contains the menu button to enable
	 */
	function initMenuButton( headerEl ) {
		var menuButton = headerEl.getElementsByClassName('byu-menu-button')[0];

		menuButton.addEventListener('click', function(e){
			clickMenuButton( e.target, headerEl );
		});
	} // initMenuButton




	/*
	 * Func: clickMenuButton
	 * Desc: Handle click events on a mobile menu button within a header
	 * Args: @btn - HTML Element - The button element that has been clicked
	 *		 @headerEl - HTML Element - The header element whose menu button has been clicked
	 */
	function clickMenuButton( btn, headerEl ) {
		var open = btn.getAttribute(expandedAttr) != 'false';
		var opening = false;
		
		// Open
		if ( !open && !opening ) {
			openMenu( btn, headerEl );
		}

		// Close
		else {
			closeMenu( btn, headerEl );
		}
	} // clickMenuButton




	/*
	 * Func: openMenu
	 * Desc: Open a mobile menu within a header
	 * Args: @btn - HTML Element - The button element that controls the menu which should be opened
	 *		 @headerEl - HTML Element - The header element whose menu should be opened
	 */
	function openMenu( btn, headerEl ) {

		// Set the open/closed attribute on the button
		btn.setAttribute(expandedAttr, true); 

		// Set the open/closed attribute on the header
		if ( !headerEl.hasClass( menuOpenClass ) ) {
			headerEl.addClass( menuOpenClass );
		}

	} // openMenu



	/*
	 * Func: closeMenu
	 * Desc: Close a mobile menu within a header
	 * Args: @btn - HTML Element - The button element that controls the menu which should be closed
	 *		 @headerEl - HTML Element - The header element whose menu should be closed
	 */
	function closeMenu( btn, headerEl ) {

		// Set the open/closed attribute on the button
		btn.setAttribute(expandedAttr, false);

		// Set the open/closed attribute on the header
		headerEl.removeClass( menuOpenClass );

	} // closeMenu


})();