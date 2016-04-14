# typescript-angular-seed

A prototype for a single page application based on **angular**, written in **TypeScript** and modularized with **JSPM** and **SystemJS**. 
It also takes advantage of TypeScript decorators for angular([at](https://github.com/RobinBuschmann/angular-typescript)), 
which allows an **angular 2**-like implementation.

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

## Documentation

### SystemJS

Since JSPM removes comments from the SystemJS config file (`src/config.js`) it is important to explain some configurations:

#### packages
The SystemJS documentation for packages can be found [here](https://github.com/systemjs/systemjs/blob/master/docs/config-api.md#packages)

* `./app` is defined for **development**. 
* `./src/app` is for **bundling** (JSPM tries to load the files from `./src/app`)
* `./base` is for **testing** (The base directory of the karma runner is `./base`. 
When running tests, the ts files are all compiled. That's why the glob looks like `./app/*.js`)

````src/config.js
  packages: {
    "./app": {
      "defaultExtension": "ts"
    },
    "./src/app": {
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "ts"
        }
      }
    },
    "./base": {
      "meta": {
        "./app/*.js": {
          "format": "register"
        }
      }
    }
  },
````
#### meta
The SystemJS documentation for meta can be found [here](https://github.com/systemjs/systemjs/blob/master/docs/config-api.md#meta)

* `at`: This defines the **reflect-metadata** library as a dependency for **angular-typescript** library
* `reflect-metadata/*` SystemJS scans a library for `require` syntax if _esm_, _csj_ or _amd_ is defined as 
[format](https://github.com/systemjs/systemjs/blob/master/docs/module-formats.md). reflect-metadata contains
a require call. That is why this is set to _global_.

````src/config.js
  meta: {
    "at": {
      "deps": [
        "reflect-metadata"
      ]
    },
    "reflect-metadata/*": {
      "format": "global"
    }
  },
````
