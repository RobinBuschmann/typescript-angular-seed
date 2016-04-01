# typescript-angular-seed

A prototype for an **angular** project written in **TypeScript** and modularized with **JSPM** and **SystemJS**. 
It also takes advantage of TypeScript decorators for angular([at](https://github.com/RobinBuschmann/angular-typescript)), 
which allows an **angular 2**-like implementation of for example services and components.

## Installation

Node.js and npm are required

````shell
npm install
````
This also runs `jspm install` and `tsd install`

## Running development server
Runs a server, which listens to file changes (Browser is automatically opened). TypeScript is compiled on the browser.

````shell
npm run serve
````

## Creating build

Creates a build in `dist/` directory. All JS files are bundled  and minifed to `build.js`. CSS is compressed to `main.css`.

````shell
npm run build:prod
````

## Run production server

Runs `npm run build:prod`, copies `src` files to `test` for debugging and runs a server. *Notice: If you want to publish your `dist/` directory you should run `npm run build:prod` again to get rid of the `src` directory within `dist`(or simply delete `src` from `dist)*

````shell
npm run serve:prod
````

## Testing

Runs `mocha` tests defined in `test/spec` within `karma` and creates code coverage with `istanbul` (`test/coverage`).

````shell
npm run serve:prod
````

  
## TODOS

  - migrate from TSD to typings (is currently not possible because of jspm module `plugin-typescript`, which compiles and bundles TypeScript files)
  - fix broken `build.js.map` of `build.js`
  - create npm scripts for publishing `dist` to amazon s3

