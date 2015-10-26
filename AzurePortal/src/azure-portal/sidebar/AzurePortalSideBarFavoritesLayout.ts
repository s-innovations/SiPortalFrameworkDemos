
/// <amd-dependency path="template!./templates/AzurePortalSideBarFavoritesTemplate.html"/>

import ko = require("knockout");
import koLayout = require("si-portal-framework/koExtensions/koLayout");
import SideBarFavoritesViewModel = require("./sideBarFavorites/SideBarFavoritesViewModel");
import AzurePortalSideBarFavoritesLayoutOptions = require("./AzurePortalSideBarFavoritesLayoutOptions");


class AzurePortalSideBarFavoritesLayout implements koLayout {

    vm: SideBarFavoritesViewModel;

    constructor(options: AzurePortalSideBarFavoritesLayoutOptions) {
        this.vm = options.sideBarFavoritesViewModel;
    }

    templateOptions() {

        return {
            name: "AzurePortalSideBarFavoritesTemplate",
            data: this,
            as: "$azurePortalSideBarFavoritesLayout",
        };
    }        
}

export = AzurePortalSideBarFavoritesLayout;