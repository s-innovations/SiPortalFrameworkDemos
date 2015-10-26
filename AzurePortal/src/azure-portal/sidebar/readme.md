# Azure Portal Sidebar Layout

```
new AzurePortalSideBarLayout(
    {
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
    }
)
```
will look like this when used in a horizontal stack panel.

![Sidebar Layout](https://raw.githubusercontent.com/s-innovations/S-Innovations.PortalFramework/master/docs/azure_portal_sidebar.png "Sidebar Layout")

## Example Code

Using Typescript we can define the options and have them type checked using an interface:
```

import SideBarFavoritesViewModel = require("./sideBarFavorites/SideBarFavoritesViewModel");
import SideBarFavoritesViewModelOptions = require("./sideBarFavorites/SideBarFavoritesViewModelOptions");


interface AzurePortalSideBarLayoutOptions {
    collapsed?: boolean | KnockoutObservable<boolean>;
    favorites?: SideBarFavoritesViewModel | SideBarFavoritesViewModelOptions;

}

export = AzurePortalSideBarLayoutOptions;
```
and here the favorites property can be either a view model or the options for the view model which makes it easy to provide options from a JSON web service.

The AzurePortalSideBarLayout then takes care of binding a view with associated view models. 
Using AMD dependency comments we can instruct the layout to be dependent on the needed view typical located in a subfolder called templates.
Currently the layout also instructs that the singleClickBindingHandler is required from the. Its on the road map to make extensions such dependency comments can be used directly from the template markup also.

```

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
 
```
and the associated template looks like this. From the template we have access to the layout using `$azurePortalSideBarLayout` due to the configuration in templateOptions.
```

<!-- <amd-dependency path="si-portal-framework/koExtensions/singleClickBindingHandler" /> -->

<!-- ko with: vm -->
<div class="si-sidebar" data-bind="css :{'si-sidebar-is-collapsed' : collapsed}">
    <div class="si-sidebar-bar">
        <button class="si-sidebar-collapse-button si-has-hover" data-bind="singleClick : toggleCollapsed">
            <svg viewBox="0 0 15 15" class="siportalfx-svg-placeholder" role="img" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false"> <g> <rect y="2.85" width="15" height="1.01"></rect> <rect y="7" width="15" height="1.01"></rect> <rect y="11.14" width="15" height="1.01"></rect> </g> </svg>
        </button>
        <button class="si-sidebar-create si-has-hover si-has-border" title="New (N)">
            <div class="si-sidebar-button-flex">
                <div class="si-sidebar-create-icon si-fill-success">
                    <svg viewBox="0 0 18 18" class="siportalfx-svg-placeholder" role="img" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false"> <g id="Isolation_Mode"> <polygon id="XMLID_319_" class="st0" points="8,18 10,18 10,10 18,10 18,8 10,8 10,0 8,0 8,8 0,8 0,10 8,10"></polygon> </g> </svg>
                </div>
                <div class="si-sidebar-create-label si-sidebar-show-if-expanded">New</div>
            </div>
        </button>

        <!-- koLayout : $azurePortalSideBarLayout.favoritesLayout -->

    </div>
</div>
<!-- /ko -->

```

and from the template it is also seen how one layout can depend on sub layouts. 


