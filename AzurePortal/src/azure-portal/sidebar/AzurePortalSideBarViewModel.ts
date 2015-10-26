
import ko = require("knockout");
import setDefaultProperties = require("si-portal-framework/utils/setDefaultProperties");
import constructorMapper = require("si-portal-framework/utils/constructorMapper");

import AzurePortalSideBarViewModelOptions = require("./AzurePortalSideBarViewModelOptions");
import SideBarFavoritesViewModel = require("./sideBarFavorites/SideBarFavoritesViewModel");


const azurePortalSideBarViewModelOptionsDefaults: AzurePortalSideBarViewModelOptions = {
    collapsed: false,
    favorites: undefined
}

class AzurePortalSideBarViewModel {

    collapsed: KnockoutObservable<boolean>;
    favorites: SideBarFavoritesViewModel

    constructor(options: AzurePortalSideBarViewModelOptions) {
        setDefaultProperties(this, options, azurePortalSideBarViewModelOptionsDefaults);
    }


    toggleCollapsed() {
        this.collapsed(!this.collapsed());
    }


}

export = AzurePortalSideBarViewModel;
 