var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "si-portal-framework/siPortal/rootLayouts/webContainerLayout", "si-portal-framework/siPortal/stackLayout/siStackLayout", "si-portal-framework/siPortal/stackLayout/siStackLayoutOrientation", "./sidebar/AzurePortalSideBarLayout"], function (require, exports, WebContainerLayout, SIStackLayout, SIStackLayoutOrientation, AzurePortalSideBarLayout) {
    var AzurePortalLayout = (function (_super) {
        __extends(AzurePortalLayout, _super);
        function AzurePortalLayout(opt) {
            _super.call(this, {
                layout: new SIStackLayout({
                    classes: ["portal-main"],
                    orientation: SIStackLayoutOrientation.horizontal,
                    elements: [new AzurePortalSideBarLayout({
                            collapsed: false,
                            favorites: {
                                favorites: [
                                    { opensExternal: true, label: "Test 1", uri: "#/Test1" },
                                    { opensExternal: true, label: "Test 2", uri: "#/Test2" },
                                    { opensExternal: true, label: "Test 3", uri: "#/Test3" },
                                    { opensExternal: true, label: "Test 4", uri: "#/Test4" },
                                    { opensExternal: true, label: "Test 5", uri: "#/Test5" },
                                ]
                            }
                        })]
                })
            });
        }
        return AzurePortalLayout;
    })(WebContainerLayout);
    return AzurePortalLayout;
});
//# sourceMappingURL=AzurePortalLayout.js.map