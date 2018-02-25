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
		
		// Set slideshow for the given category
		slideshow.setCategory(category);
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
		
		// Reset slider if slideshow is already there
		var category = slideshow.category;
		if (jq(".slides .slide").length > 0) {
			jq(".slides .slide").removeClass("active");
			jq(".slides .slide."+category).first().addClass("active");
			slideshow.reset = false;
		}
		else
			slideshow.reset = true;
	});
});