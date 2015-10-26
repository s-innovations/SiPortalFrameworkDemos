var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "src/siPortal/rootLayouts/WebContainerLayout", "src/siPortal/stackLayout/siStackLayout", "src/siPortal/stackLayout/siStackLayoutOrientation", "./sidebar/AzurePortalSideBarLayout"], function (require, exports, WebContainerLayout, SIStackLayout, SIStackLayoutOrientation, AzurePortalSideBarLayout) {
    var AzurePortalLayout = (function (_super) {
        __extends(AzurePortalLayout, _super);
        function AzurePortalLayout(opt) {
            _super.call(this, {
                layout: new SIStackLayout({
                    classes: ["portal-main"],
                    orientation: SIStackLayoutOrientation.horizontal,
                    elements: [new AzurePortalSideBarLayout(), opt.layout]
                })
            });
        }
        return AzurePortalLayout;
    })(WebContainerLayout);
    return AzurePortalLayout;
});
