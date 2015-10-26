         

import SideBarFavoritesViewModel = require("./sideBarFavorites/SideBarFavoritesViewModel");
import SideBarFavoritesViewModelOptions = require("./sideBarFavorites/SideBarFavoritesViewModelOptions");


interface AzurePortalSideBarLayoutOptions {
    collapsed?: boolean | KnockoutObservable<boolean>;
    favorites?: SideBarFavoritesViewModel | SideBarFavoritesViewModelOptions;

}

export = AzurePortalSideBarLayoutOptions;