/*global QUnit*/

sap.ui.define([
	"mrscombr/zmm_req_create/controller/exportview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("exportview Controller");

	QUnit.test("I should test the exportview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
