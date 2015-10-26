
import ko = require("knockout");
import setDefaultProperties = require("si-portal-framework/utils/setDefaultProperties");
import constructorMapper = require("si-portal-framework/utils/constructorMapper");

import SideBarFavoriteViewModel = require("./SideBarFavoriteViewModel");
import SideBarFavoriteViewModelOptions = require("./SideBarFavoriteViewModelOptions");
import SideBarFavoritesViewModelOptions = require("./SideBarFavoritesViewModelOptions");

const sideBarFavoritesViewModelDefaults: SideBarFavoritesViewModelOptions = {
    favorites: [],
}
const mappers = {
    favorites: constructorMapper((o: SideBarFavoriteViewModel | SideBarFavoriteViewModelOptions): o is SideBarFavoriteViewModel => o instanceof SideBarFavoriteViewModel, SideBarFavoriteViewModel)
}

class SideBarFavoritesViewModel {

    favorites: KnockoutObservableArray<SideBarFavoriteViewModel>;

    constructor(options: SideBarFavoritesViewModelOptions = {}) {
        setDefaultProperties(this, options, sideBarFavoritesViewModelDefaults, mappers);
    }



}

export = SideBarFavoritesViewModel;