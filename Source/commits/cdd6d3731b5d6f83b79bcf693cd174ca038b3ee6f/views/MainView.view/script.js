jq = jQuery.noConflict();
jq(document).one("ready", function() {
	// Handle character selection
	jq(document).on("click", ".demoTourAppContainer .categories .cat", function() {
		// Remove all selected
		jq(".demoTourAppContainer .categories .cat").removeClass("selected");
		
		// Set current selected
		jq(this).addClass("selected");
		
		// Get category
		var category = jq(this).data("cat");
		
		// Set description selected
		jq(".demoTourAppContainer .descriptions .desc").removeClass("selected");
		jq(".demoTourAppContainer .descriptions .desc."+category).addClass("selected");
	});
	
	// Start the tour listener
	jq(document).on("click", ".demoTourAppContainer .start_tour", function() {
		// Check if a category is selected
		if (jq(".demoTourAppContainer .categories .cat.selected").length == 0)
			return;
		
		// Set slider screen active
		jq(".demoTourAppContainer .screen").removeClass("active");
		jq(".demoTourAppContainer .screen.slider").addClass("active");
		
		// Load slideshow
		jq("#slideShowContainer").trigger("load");
		
		// Set slideshow for the given category
	});
});