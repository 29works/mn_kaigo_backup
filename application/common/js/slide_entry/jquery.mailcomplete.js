(function($) {
	$.fn.mailcomplete = function(options) {

		var elements = this;
		var defaults = {
			source: [
				"@gmail.com",
				"@yahoo.co.jp",
				"@ezweb.ne.jp",
				"@au.com",
				"@docomo.ne.jp",
				"@i.softbank.jp",
				"@softbank.ne.jp",
			],
			minDomain: 1
		};
		var setting = $.extend(defaults, options);

		var domains = []; 
		var currentVal; 
		var atindex = 0; 
		var mailname; 
		var autocompleteFlag = false; 

		elements.on('keyup', function() {
			currentVal = elements.val();
			
			if (currentVal.match(/@/)) {
				if(!autocompleteFlag) {
					autocompleteFlag = true;
					autocompleteSet(elements);

				
				} else {
					
					if(currentVal.indexOf('@') != atindex) {
						
						elements.autocomplete('destroy');
						autocompleteSet(elements);
					}
				}

			
			} else {
				
				if(autocompleteFlag) {
					autocompleteFlag = false;
					
					elements.autocomplete('destroy');
				}
			}
		});

		function autocompleteSet(target) {
			
			atindex = currentVal.indexOf('@');
			mailname = currentVal.slice(0, atindex);

			for (var i = 0; i < setting.source.length; i++) {
				domains[i] = mailname + setting.source[i];
			};

			target.autocomplete({
				source: domains,
			});
			target.autocomplete("search", "@");
		}
	}
})(jQuery);