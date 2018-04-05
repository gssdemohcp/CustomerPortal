sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/Popover",
	"sap/m/Button"
], function(BaseController, History, Popover, Button) {
	"use strict";

	return BaseController.extend("generated.app.controller.14785326395379781_S3", {

		onAfterRendering: function() {

		},

		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("14785326395379781_S3").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
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
		
		handlePressConfiguration: function(oEvent) {
			var oItem = oEvent.getSource();
			var oShell = this.getView().byId("myShell");
			var bState = oShell.getShowPane();
			oShell.setShowPane(!bState);
			oItem.setShowMarker(!bState);
			oItem.setSelected(!bState);
		},
		
		handlePressHome: function(){
			var oBindingContext = this.getView().getBindingContext();
			this.doNavigate("14785297949012503_S0", oBindingContext);
		},
		
		handleUserNamePress: function() {
			// var popover = new Popover({
			// 	showHeader: false,
			// 	placement: sap.m.PlacementType.Bottom,
			// 	content: [
			// 		new Button({
			// 			text: "Profile",
			// 			type: sap.m.ButtonType.Transparent
			// 		})
					// new Button({
					// 	text: "Help",
					// 	type: sap.m.ButtonType.Transparent
					// }),
					// new Button({
					// 	text: "Logout",
					// 	type: sap.m.ButtonType.Transparent,
					// 	onclick: this.doNavigate("login")
					// })
			// 	]
			// }).addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
			// popover.openBy(event.getSource());
			alert("Display Customer Profile");
		},
		
		handleLogoffPress: function(){
			this.doNavigate("login");
		},
		
		handleLinkPress: function() {
			// var oListItem = oEvent.getParameter("listItem");
			// var oBindingContext = oListItem.getBindingContext();
			this.doNavigate("14785313131419608_S1");
		},
		
		_onImagePress: function() {
			var oBindingContext = this.getView().getBindingContext();
			this.doNavigate("14785322857555057_S2", oBindingContext);
		},
		
		_onStandardTilePress: function() {
			var oBindingContext = this.getView().getBindingContext();
			this.doNavigate("14785384963975306_S5", oBindingContext);
		},

		_onStandardTilePress1: function() {
			var oBindingContext = this.getView().getBindingContext();
			this.doNavigate("14785384963975306_S5", oBindingContext);
		},
		
		_onStandardTilePress2: function() {
			var oBindingContext = this.getView().getBindingContext();
			this.doNavigate("14785384963975306_S5", oBindingContext);
		},
		
		_onPageNavButtonPress: function() {
			var oBindingContext = this.getView().getBindingContext();
			this.doNavigate("14785322857555057_S2", oBindingContext);
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
		
		_onButtonPress2: function() {
			var targetPos = "center center";
			targetPos = (targetPos === "default") ? undefined : targetPos;
			sap.m.MessageToast.show("New Ticket Created successfully", {
				duration: 0 || 3000,
				at: targetPos,
				my: targetPos
			});
		},
		
		_onButtonPress3: function() {
			var targetPos = "center center";
			targetPos = (targetPos === "default") ? undefined : targetPos;
			sap.m.MessageToast.show("Ticket Creation Failed", {
				duration: 0 || 3000,
				at: targetPos,
				my: targetPos
			});
		},
		
		_onTableItemPress: function(oEvent) {
			var oListItem = oEvent.getParameter("listItem");
			var oBindingContext = oListItem.getBindingContext();
			this.doNavigate("14787064085002045_S7", oBindingContext);
		}
	});
}, /* bExport= */ true);