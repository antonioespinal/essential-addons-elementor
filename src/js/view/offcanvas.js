
var EaelOffcanvas = function($scope, $) {
	new window.EAELOffcanvasContent($scope);
};
jQuery(window).on("elementor/frontend/init", function() {

	if (eael.elementStatusCheck("offcanvasLoad")) {
		return false;
	}

	elementorFrontend.hooks.addAction(
		"frontend/element_ready/eael-offcanvas.default",
		EaelOffcanvas
	);
});
