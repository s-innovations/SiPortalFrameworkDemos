# HelloWorld Demo using S-Innovations.PortalFramework

1. Create AspNet 5 Empty Project.
2. Add Bower and Grunt configuration files
3. Create a src folder

## Bower
1. Add the si-portal-framework as a bower dependency. (for demo projects within the repository bower link is good).
    1. I used   "si-portal-framework": "C:/dev/S-Innovations/S-Innovations.PortalFramework/.git" as local
    2. and 

## TSD Setup
1. [Open Command prompt](https://visualstudiogallery.msdn.microsoft.com/4e84e2cf-2d6b-472a-b1e2-b84932511379)
2. Run "tsd init"
3. Run "tsd install require --save-dev"
4. Run "tsd install knockout --save-dev" 
5. Run "tsd link" which will add the generated d.ts file from si-portal-framework to tsd.d.ts


## Grunt Setup
1. Add NPM configuration file
2. Run "npm install grunt-bower-task --save-dev"
3. Run "npm install grunt-sync --save-dev"
4. Run "npm install grunt-contrib-watch --save-dev"
5. Run "npm install grunt-contrib-clean --save-dev" 
6. Optional one can run (flatten-packages)[https://www.npmjs.com/package/flatten-packages] to remove long node_modules paths on windows. 



