<?php
//#section#[header]
// Use Important Headers
use \API\Platform\importer;
use \API\Platform\engine;
use \Exception;

// Check Platform Existance
if (!defined('_RB_PLATFORM_')) throw new Exception("Platform is not defined!");

// Import DOM, HTML
importer::import("UI", "Html", "DOM");
importer::import("UI", "Html", "HTML");

use \UI\Html\DOM;
use \UI\Html\HTML;

// Import application for initialization
importer::import("AEL", "Platform", "application");
use \AEL\Platform\application;

// Increase application's view loading depth
application::incLoadingDepth();

// Set Application ID
$appID = 59;

// Init Application and Application literal
application::init(59);
// Secure Importer
importer::secure(TRUE);

// Import SDK Packages

// Import APP Packages
//#section_end#
//#section#[view]
use \UI\Apps\APPContent;

// Create Application Content
$appContent = new APPContent($appID);
$actionFactory = $appContent->getActionFactory();

// Build the application view content
$appContent->build("", "demoTourApp", TRUE);

// Load slideshow
$sliderContainer = HTML::select(".demoTourAppContainer .screen.slider")->item(0);
$slideshow = $appContent->getAppViewContainer($viewName = "slideShow", $attr = array(), $startup = FALSE, $containerID = "slideShowContainer", $loading = TRUE, $preload = FALSE);
DOM::append($sliderContainer, $slideshow);

// Return output
return $appContent->getReport();
//#section_end#
?>