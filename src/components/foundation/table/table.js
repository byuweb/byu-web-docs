/*
 * Module: BYU Table
 * Desc:   Handle tables that are wider than thier container
 */

var byu_table = (function(){

	'use strict';

	var doc = document;

	// Execute the function
	executeOnLoad( updateTables );


	/*
	 * Func: ExecuteOnLoad
	 * Desc: Execute specified function when the DOM is ready. Handle 
	 * Args: functionName - Function Identifier - Name of the function to execute
	 */
	function executeOnLoad( functionName ) {
		// in case the document is already rendered
		if (doc.readyState!='loading') functionName();
		// modern browsers
		else if (doc.addEventListener) doc.addEventListener('DOMContentLoaded', functionName);
		// IE <= 8
		else doc.attachEvent('onreadystatechange', function(){
		    if (doc.readyState=='complete') functionName();
		});
	}
	

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
		    var c_width = container.offsetWidth;
		    var table = container. getElementsByTagName("table")[0];
		    var t_width = table.offsetWidth;

		    console.log( c_width < t_width );
		}
	}

	// Return public methods
	return {

	};

})();