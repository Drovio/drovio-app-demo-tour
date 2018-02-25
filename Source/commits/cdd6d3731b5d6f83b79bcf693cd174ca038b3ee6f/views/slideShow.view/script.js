jq = jQuery.noConflict();
jq(document).one("ready", function() {
	// Reset tour
	jq(document).on("click", ".demoSlideShowContainer .button.startover", function() {

		// Set start screen active
		jq(".demoTourAppContainer .screen").removeClass("active");
		jq(".demoTourAppContainer .screen.hello").addClass("active");
	});
});