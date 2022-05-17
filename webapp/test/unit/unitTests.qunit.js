/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"mrscombr/zmm_req_create/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
