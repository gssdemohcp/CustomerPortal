sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function(BaseController, History) {
	"use strict";

	return BaseController.extend("generated.app.controller.login", {

		onAfterRendering: function() {

		},

		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("login").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));

		},
		handleRouteMatched: function(oEvent) {
			var params = {};
			if (oEvent.mParameters.data.context || oEvent.mParameters.data.masterContext) {
				this.sContext = oEvent.mParameters.data.context;
				this.sMasterContext = oEvent.mParameters.data.masterContext;

				if (!this.sContext) {
					this.getView().bindElement("/" + this.sMasterContext, params);
				} else {
					this.getView().bindElement("/" + this.sContext, params);
				}
			}
		},
		
		_onButtonPress: function() {
			var uname = this.byId("sap_Responsive_Page_0-content-sap_m_Input-1479722991732").valueOf()._lastValue;
			console.log("uname", uname);
			var upwd = this.byId("sap_Responsive_Page_0-content-sap_m_Input-1479723128903").valueOf()._lastValue;
			console.log("upwd", upwd);
			if (uname == 1001192 && upwd == "gss") {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("14785297949012503_S0",{
					"ID": "122"
				});
			} else {
				var dyn_msg = "Invalid UserID or Password!";
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.error(dyn_msg, {
					title: "Error", // default
					onClose: null, // default
					styleClass: " ", // default
					initialFocus: null, // default
					textDirection: sap.ui.core.TextDirection.Inherit // default
				});
			}
			// var oBindingContext = this.getView().getBindingContext();
			// this.doNavigate("14785297949012503_S0", oBindingContext);
		}
		
		// doNavigate: function(sRouteName, oBindingContext) {

		// 	var that = this;
		// 	var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
		// 	var oModel = (oBindingContext) ? oBindingContext.getModel() : null;

		// 	var entityNameSet;
		// 	if (sPath !== null && sPath !== "") {

		// 		if (sPath.substring(0, 1) === "/") {
		// 			sPath = sPath.substring(1);
		// 		}
		// 		entityNameSet = sPath.split("(")[0];
		// 	}
		// 	var navigationPropertyName;
		// 	var sMasterContext = this.sMasterContext ? this.sMasterContext : sPath;

		// 	if (entityNameSet !== null) {
		// 		navigationPropertyName = that.getOwnerComponent().getNavigationPropertyForNavigationWithContext(entityNameSet, sRouteName);
		// 	}
		// 	if (navigationPropertyName !== null && navigationPropertyName !== undefined) {
		// 		if (navigationPropertyName === "") {
		// 			this.oRouter.navTo(sRouteName, {
		// 				context: sPath,
		// 				masterContext: sMasterContext
		// 			}, false);
		// 		} else {
		// 			oModel.createBindingContext(navigationPropertyName, oBindingContext, null, function(bindingContext) {
		// 				sPath = bindingContext.getPath();
		// 				if (sPath.substring(0, 1) === "/") {
		// 					sPath = sPath.substring(1);
		// 				}

		// 				// If the navigation is a 1-n, sPath would be "undefined" as this is not supported in Build
		// 				if (sPath === "undefined") {
		// 					that.oRouter.navTo(sRouteName);
		// 				} else {
		// 					that.oRouter.navTo(sRouteName, {
		// 						context: sPath,
		// 						masterContext: sMasterContext
		// 					}, false);
		// 				}
		// 			});
		// 		}
		// 	} else {
		// 		this.oRouter.navTo(sRouteName);
		// 	}
		// }
	});
}, /* bExport= */ true);