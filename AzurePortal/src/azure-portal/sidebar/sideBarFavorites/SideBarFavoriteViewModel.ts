
import setDefaultProperties = require("si-portal-framework/utils/setDefaultProperties");
import SideBarFavoriteViewModelOptions = require("./SideBarFavoriteViewModelOptions");

const SideBarFavoriteViewModelOptionsDefaults: SideBarFavoriteViewModelOptions = {
    opensExternal: false,
    uri: "#",
    label: undefined,
};

class SideBarFavoriteViewModel {

    opensExternal: KnockoutObservable<boolean>;
    uri: KnockoutObservable<string>;

    constructor(options: SideBarFavoriteViewModelOptions) {
        setDefaultProperties(this, options, SideBarFavoriteViewModelOptionsDefaults);
    }
}
export = SideBarFavoriteViewModel;