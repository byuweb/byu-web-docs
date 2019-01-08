/*
 * Module: BYU Table
 * Desc:   Handle tables that are wider than thier container
 */

var byu_table = (function(){

	'use strict';

	var doc = document;


	// Execute the function
	byu_main.executeOnLoad( updateTables );
	

	/*
	 * Func: UpdateTables
	 * Desc: Detect and handle tables that are wider than their container.
	 * 		 Works on tables contained within an element of class "table-container".
	 * Args: none
	 */
	function updateTables() {
		var containers = doc.getElementsByClassName("table-container");

		for (var i=0; i < containers.length; i++) {
		    var container = containers[i];
		    updateTable( container );
		}
	}


	/*
	 * Func: UpdateTable
	 * Desc: Check if a table is wider than its container, and mark scrolling position within it
	 * Args: @container - HTML Element - A container element for a table (probably of class "table-container")
	 */
	function updateTable( container ) {
		var c_width = container.offsetWidth;
	    var table = container. getElementsByTagName("table")[0];
	    var t_width = table.offsetWidth;
	    var table_wide_class = "table-wide";
	    var start_visible_class = "start-visible";
	    var end_visible_class = "end-visible";

	    if ( c_width < t_width ) {

	    	// Add table wide class if it's not already there
	    	if ( !container.hasClass( table_wide_class ) ) { 
		    	container.addClass( table_wide_class );
		    }

	    	// Check if the start of the table is visible and handle
	    	if ( table.scrollLeft == 0 ) {
	    		if ( !container.hasClass( start_visible_class ) ) {
		    		container.addClass( start_visible_class );
	    		}
	    	} else {
	    		container.removeClass( start_visible_class );
	    	}

	    	// Check if the end of the table is visible and handle
	    	if ( t_width - table.scrollLeft == c_width ) {
	    		if ( !container.hasClass( end_visible_class ) ) {
		    		container.addClass( end_visible_class );
	    		}
	    	} else {
	    		container.removeClass( end_visible_class );
	    	}
	    } 

	    // The table is not too wide for its container
	    else {
	    	container.removeClass( table_wide_class );
	    }
	}

})();