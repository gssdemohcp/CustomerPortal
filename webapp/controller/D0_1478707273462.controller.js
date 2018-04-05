sap.ui.define(["sap/ui/core/mvc/Controller",
	// "sap/m/MessageBox"
], function(BaseController) {
	"use strict";

	return BaseController.extend("generated.app.controller.D0_1478707273462", {

		onInit: function() {
			this._oDialog = this.getView().getContent()[0];
		},
		onExit: function() {
			this._oDialog.destroy();
		},
		setRouter: function(oRouter) {
			this.oRouter = oRouter;
		},
		_onDialogAfterClose: function() {
			var oBindingContext = this.getView().getBindingContext();

			this.doNavigate("14785326395379781_S3", oBindingContext);

		},
		doNavigate: function(sRouteName, oBindingContext) {

			var that = this;
			var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
			var oModel = (oBindingContext) ? oBindingContext.getModel() : null;

			var entityNameSet;
			if (sPath !== null && sPath !== "") {

				if (sPath.substring(0, 1) === "/") {
					sPath = sPath.substring(1);
				}
				entityNameSet = sPath.split("(")[0];
			}
			var navigationPropertyName;
			var sMasterContext = this.sMasterContext ? this.sMasterContext : sPath;

			if (entityNameSet !== null) {
				navigationPropertyName = that.getOwnerComponent().getNavigationPropertyForNavigationWithContext(entityNameSet, sRouteName);
			}
			if (navigationPropertyName !== null && navigationPropertyName !== undefined) {
				if (navigationPropertyName === "") {
					this.oRouter.navTo(sRouteName, {
						context: sPath,
						masterContext: sMasterContext
					}, false);
				} else {
					oModel.createBindingContext(navigationPropertyName, oBindingContext, null, function(bindingContext) {
						sPath = bindingContext.getPath();
						if (sPath.substring(0, 1) === "/") {
							sPath = sPath.substring(1);
						}

						// If the navigation is a 1-n, sPath would be "undefined" as this is not supported in Build
						if (sPath === "undefined") {
							that.oRouter.navTo(sRouteName);
						} else {
							that.oRouter.navTo(sRouteName, {
								context: sPath,
								masterContext: sMasterContext
							}, false);
						}
					});
				}
			} else {
				this.oRouter.navTo(sRouteName);
			}
		},
		_onButtonPress: function() {
			alert("New Ticket Created Successflully");
			this.doNavigate("14785326395379781_S3");
		},

		_onButtonPress1: function() {
			var oBindingContext = this.getView().getBindingContext();
			this.doNavigate("14785326395379781_S3", oBindingContext);
		}
	});
}, /* bExport= */ true);