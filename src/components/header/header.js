var byu_header = (function() {

	'use strict';

	var doc = document; // Put this in a variable to enable smaller compression
	var jsInitClass = 'js-enabled';
	var headerEl;

	// Execute the initialize function
	byu_main.executeOnLoad( init );


	/*
	 * Func: Init
	 * Desc: Initialize the header button
	 * Args: none
	 */
	function init() {
		headerEl = doc.getElementsByClassName('byu-header')[0];
		headerEl.addClass(jsInitClass);
		if( headerEl.hasClass(jsInitClass) ) {
			console.log( 'Header js initialized' );
		}
	}

	return {};

})();