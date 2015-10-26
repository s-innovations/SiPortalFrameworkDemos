

import SideBarFavoritesViewModel = require("./sideBarFavorites/SideBarFavoritesViewModel");

interface AzurePortalSideBarViewModelOptions {
    /**
     * flag setting if the sidebar is collapsed or open. 
     * If passed a observable, the sidebar will open and closed on changes.
     *
     */
    collapsed?: boolean | KnockoutObservable<boolean>;
    
    /**
     * The sidebar favorites viewmodel.
     */
    favorites: SideBarFavoritesViewModel;

}

export = AzurePortalSideBarViewModelOptions;