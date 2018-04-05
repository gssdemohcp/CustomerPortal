sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageBox",
	"sap/m/Button",
	"sap/m/Dialog",
	"sap/m/Text",
	"sap/m/Popover"
], function(BaseController, History, MessageBox, Button, Text, Dialog, Popover) {
	"use strict";

	return BaseController.extend("generated.app.controller.14785297949012503_S0", {

		onAfterRendering: function() {
			var bindingParameters = {
				"path": "/businessData",
				"model": "staticDataModel"
			};
			this.getView().byId("sap_Responsive_Page_0-content-sap_chart_LineChart-1478698245165").bindData(bindingParameters);
			// this.getView().byId("sap_Responsive_Page_0-content-sap_chart_LineChart-1478698245166").bindData(bindingParameters);
		},

		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("14785297949012503_S0").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));

			var view = this.getView();
			var oModel = new sap.ui.model.json.JSONModel();
			view.setModel(oModel, 'staticDataModel');

			var oData = {
				"businessData": [{
					"Country": "India",
					"City": "Bangalore",
					"Revenue": "1538",
					"Profit": "296",
					"Year": "2014",
					"Measure1": "659.26"
				}, {
					"Country": "Canada",
					"City": "Ottawa",
					"Revenue": "892",
					"Profit": "141",
					"Year": "2008",
					"Measure1": "758.38"
				}, {
					"Country": "Canada",
					"City": "Nunavut",
					"Revenue": "789",
					"Profit": "133",
					"Year": "2009",
					"Measure1": "845.42"
				}, {
					"Country": "India",
					"City": "Delhi",
					"Revenue": "2785",
					"Profit": "560",
					"Year": "2014",
					"Measure1": "674.16"
				}, {
					"Country": "USA",
					"City": "Chicago",
					"Revenue": "2356",
					"Profit": "489",
					"Dimension1": "2010",
					"Measure1": "995.26"
				}, {
					"Country": "Japan",
					"City": "Kariya",
					"Revenue": "1987",
					"Profit": "270",
					"Year": "2012",
					"Measure1": "748.72"
				}, {
					"Country": "India",
					"City": "Mumbai",
					"Revenue": "2538",
					"Profit": "708",
					"Year": "2014",
					"Measure1": "524.51"
				}, {
					"Country": "Germany",
					"City": "Breman",
					"Revenue": "1245",
					"Profit": "350",
					"Year": "2015",
					"Measure1": "598.96"
				}, {
					"Country": "Germany",
					"City": "Berlin",
					"Revenue": "1867",
					"Profit": "369",
					"Dimension1": "2015",
					"Measure1": "185.46"
				}, {
					"Country": "Canada",
					"City": "Nunavut",
					"Revenue": "1410",
					"Profit": "245",
					"Year": "2008",
					"Measure1": "789.38"
				}, {
					"Country": "USA",
					"City": "Dallas",
					"Revenue": "2410",
					"Profit": "576",
					"Dimension1": "2010",
					"Measure1": "790.32"
				}, {
					"Country": "India",
					"City": "Kolkata",
					"Revenue": "2020",
					"Profit": "459",
					"Year": "2010",
					"Measure1": "965.85"
				}, {
					"Country": "USA",
					"City": "Seattle",
					"Revenue": "2678",
					"Profit": "358",
					"Dimension1": "2010",
					"Measure1": "685.39"
				}, {
					"Country": "USA",
					"City": "Omaha",
					"Revenue": "3410",
					"Profit": "760",
					"Year": "2010",
					"Measure1": "798.32"
				}, {
					"Country": "Japan",
					"City": "Yatomi",
					"Revenue": "1310",
					"Profit": "270",
					"Year": "2012",
					"Measure1": "896.15"
				}, {
					"Country": "Japan",
					"City": "Seiyo",
					"Revenue": "1485",
					"Profit": "325",
					"Year": "2012",
					"Measure1": "779.65"
				}]
			};
			view.getModel("staticDataModel").setData(oData, true);
			this.bindingParameters = {
				"path": "/businessData",
				"model": "staticDataModel"
			};
			view.byId("sap_Responsive_Page_0-content-sap_chart_LineChart-1478698245165").bindData(this.bindingParameters);
			view.byId("sap_Responsive_Page_0-content-sap_chart_LineChart-1478698245166").bindData(this.bindingParameters);
		},
		
		LoadMsg: function() {
			// create popover
			MessageBox.information("Your Service Contract for Serial ID - WH10009108 will expire in 15 days.");
			// if (!this._oPopover) {
			// 	this._oPopover = sap.ui.xmlfragment("messagesMsg", "generated.app.Messages", this);
			// 	this.getView().addDependent(this._oPopover);
			// }
			// // delay because addDependent will do a async rerendering and the popover will immediately close without it
			// var oButton = oEvent.getSource();
			// jQuery.sap.delayedCall(0, this, function() {
			// 	this._oPopover.openBy(oButton);
			// });
		},


		onCollapseExapandPress: function(event) {
			var sideNavigation = this.getView().byId('sideNavigation');
			var expanded = !sideNavigation.getExpanded();

			sideNavigation.setExpanded(expanded);
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
		
		handlePressHome: function(){
			var oBindingContext = this.getView().getBindingContext();
			this.doNavigate("14785297949012503_S0", oBindingContext);
		},

		handlePressConfiguration: function(oEvent) {
			var oItem = oEvent.getSource();
			var oShell = this.getView().byId("myShell");
			var bState = oShell.getShowPane();
			oShell.setShowPane(!bState);
			oItem.setShowMarker(!bState);
			oItem.setSelected(!bState);
		},

		_onImagePress: function() {
			var oBindingContext = this.getView().getBindingContext();
			this.doNavigate("14785322857555057_S2", oBindingContext);
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
		
		_onListItemPress: function(oEvent) {
			var oListItem = oEvent.getParameter("listItem");
			var oBindingContext = oListItem.getBindingContext();

			this.doNavigate("14785313131419608_S1", oBindingContext);

		}
	});
}, /* bExport= */ true);