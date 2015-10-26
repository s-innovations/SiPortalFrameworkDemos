
/// <amd-dependency path="template!./templates/sidebarTemplate.html"/>
/// <amd-dependency path="si-portal-framework/koExtensions/singleClickBindingHandler"/>


import ko = require("knockout");
import koLayout = require("si-portal-framework/koExtensions/koLayout");
import AzurePortalSideBarFavoritesLayout = require("./AzurePortalSideBarFavoritesLayout");
import SideBarFavoritesViewModel = require("./sideBarFavorites/SideBarFavoritesViewModel");
import AzurePortalSideBarViewModel = require("./AzurePortalSideBarViewModel"); 
import AzurePortalSideBarLayoutOptions = require("./AzurePortalSideBarLayoutOptions");

class AzurePortalSideBarLayout implements koLayout {
                                                                

    vm: AzurePortalSideBarViewModel;
    favoritesLayout: AzurePortalSideBarFavoritesLayout; 
  
    constructor(options: AzurePortalSideBarLayoutOptions) {

        var sideBarFavoritesViewModel = new SideBarFavoritesViewModel(options.favorites);
        this.vm = new AzurePortalSideBarViewModel({
            collapsed: options.collapsed,
            favorites: sideBarFavoritesViewModel
        });
        this.favoritesLayout = new AzurePortalSideBarFavoritesLayout({ sideBarFavoritesViewModel: sideBarFavoritesViewModel });        
    }


    templateOptions() {

        return {
            name: "sidebarTemplate",
            data: this,
            as: "$azurePortalSideBarLayout" 
        };
    }



}

export = AzurePortalSideBarLayout;