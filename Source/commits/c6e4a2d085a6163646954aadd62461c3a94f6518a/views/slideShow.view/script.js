jq = jQuery.noConflict();
jq(document).one("ready", function() {

	jq(document).on("content.modified", function() {
		// Initialize tour
		if (slideshow.reset) {
			var category = slideshow.category;
			if (category == undefined)
				break;
			jq(".slides .slide").removeClass("active");
			jq(".slides .slide."+category).eq(0).addClass("active");
			slideshow.reset = false;
		}
	});
	
	// Reset tour
	jq(document).on("click", ".demoSlideShowContainer .button.startover", function() {
		// Set start screen active
		jq(".demoTourAppContainer .screen").removeClass("active");
		jq(".demoTourAppContainer .screen.hello").addClass("active");
	});
	
	// Next slide
	jq(document).on("click", ".demoSlideShowContainer .button.next", function() {
		// Get slideshow category
		var category = slideshow.category;
		if (category == undefined)
			break;
			
		// Get active slide of this category
		var maxSlide = jq(".slides .slide."+category).length - 1;
		var currentIndex = jq(".slides .slide.active").index(".slides .slide."+category);
		var nextIndex = currentIndex + 1;
		nextIndex = (nextIndex > maxSlide ? maxSlide : nextIndex);
		
		// Check if we are at the first slide
		if (currentIndex == nextIndex)
			return;
		
		// Set/Unset active class
		jq(".slides .slide."+category).eq(currentIndex).removeClass("active");
		jq(".slides .slide."+category).eq(nextIndex).addClass("active");
	});
	
	// Previous slide
	jq(document).on("click", ".demoSlideShowContainer .button.previous", function() {
		// Get slideshow category
		var category = slideshow.category;
		if (category == undefined)
			break;
		
		// Get active slide of this category
		var currentIndex = jq(".slides .slide.active").index(".slides .slide."+category);
		var prevIndex = currentIndex - 1;
		prevIndex = (prevIndex < 0 ? 0 : prevIndex);
		
		// Check if we are at the first slide
		if (currentIndex == prevIndex)
			return;
		
		// Set/Unset active class
		jq(".slides .slide."+category).eq(currentIndex).removeClass("active");
		jq(".slides .slide."+category).eq(prevIndex).addClass("active");
	});
});