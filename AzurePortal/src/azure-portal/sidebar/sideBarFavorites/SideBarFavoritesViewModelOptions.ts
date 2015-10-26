
import SideBarFavoriteViewModelOptions = require("./SideBarFavoriteViewModelOptions");
import SideBarFavoriteViewModel = require("./SideBarFavoriteViewModel"); 

interface SideBarFavoritesViewModelOptions {
    favorites?: Array<SideBarFavoriteViewModelOptions | SideBarFavoriteViewModel> | KnockoutObservableArray<SideBarFavoriteViewModel>;
}
export = SideBarFavoritesViewModelOptions;