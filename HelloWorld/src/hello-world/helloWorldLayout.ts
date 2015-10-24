
/// <amd-dependency path="template!./templates/helloWorldLayout.html"/>

import koLayout = require('si-portal-framework/koExtensions/koLayout');

class helloWorldLayout implements koLayout {

    templateOptions() {

        return {
            name: "helloWorldLayout", 
            data: this

        };
    }
    
}

export = helloWorldLayout;