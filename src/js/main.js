/*
 * Module: BYU Main
 * Desc:   Functions that apply to all BYU pages, components, or scripts
 */

var byu_main = (function(){

	var doc = document;

	/*
	 * HTML Prototype function assignments
	 * Desc: Make it easy to add, test, and remove HTML classes via compatible, plain JS
	 * Src:  https://css-tricks.com/snippets/javascript/addclass-function/#comment-1618405
	 */
	
	// HasClass
	HTMLElement.prototype.hasClass = function(name) {
	    return this.className.match(new RegExp('(\\s|^)'+name+'(\\s|$)'));
	};

	// AddClass
	HTMLElement.prototype.addClass = function(new_class) {   
	    var nc = new_class.split(",");

	    for (var i = 0; i < nc.length; i++) {
	        if ((" " + this.className + " ").indexOf(" " + nc[i] + " ") == -1) {
	            this.className += " " + nc[i];
	        }
	    }
	    return this;
	};

	// RemoveClass
	HTMLElement.prototype.removeClass = function(name) {
	  if (this.hasClass(name)) {
	    var reg = new RegExp('(\\s|^)'+name+'(\\s|$)');
	    this.className = this.className.replace(reg,' ');
	  }
	  return this;
	};


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


	// Expose public methods
	return {
		executeOnLoad: executeOnLoad,
	}

})();