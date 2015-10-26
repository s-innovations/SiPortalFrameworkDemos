

interface SideBarFavoriteViewModelOptions {
    opensExternal?: boolean | KnockoutObservable<boolean>;
    uri?: string | KnockoutObservable<boolean>;
    label: string | KnockoutObservable<string>;
}

export = SideBarFavoriteViewModelOptions;