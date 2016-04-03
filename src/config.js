System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "ts",
  typescriptOptions: {
    "typeCheck": "strict",
    "tsconfig": true
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

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
    },
    "at": {
      "meta": {
        "*.js": {
          "typings": true
        }
      }
    }
  },

  map: {
    "angular": "github:angular/bower-angular@1.5.2",
    "angular-mocks": "github:angular/bower-angular-mocks@1.5.2",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.18",
    "at": "github:RobinBuschmann/angular-typescript@0.0.15",
    "bootstrap-sass": "github:twbs/bootstrap-sass@3.3.6",
    "ionic": "github:driftyco/ionic-bower@1.2.4",
    "ng-template": "npm:plugin-ng-template@0.1.1",
    "ts": "github:frankwallis/plugin-typescript@4.0.5",
    "ts-runtime": "npm:babel-runtime@5.8.35",
    "typescript": "npm:typescript@1.8.9",
    "github:angular-ui/ui-router@0.2.13": {
      "angular": "github:angular/bower-angular@1.5.2"
    },
    "github:angular-ui/ui-router@0.2.18": {
      "angular": "github:angular/bower-angular@1.5.2"
    },
    "github:angular/bower-angular-animate@1.5.2": {
      "angular": "github:angular/bower-angular@1.5.2"
    },
    "github:angular/bower-angular-mocks@1.5.2": {
      "angular": "github:angular/bower-angular@1.5.2"
    },
    "github:angular/bower-angular-sanitize@1.5.2": {
      "angular": "github:angular/bower-angular@1.5.2"
    },
    "github:driftyco/ionic-bower@1.2.4": {
      "angular": "github:angular/bower-angular@1.5.2",
      "angular-animate": "github:angular/bower-angular-animate@1.5.2",
      "angular-sanitize": "github:angular/bower-angular-sanitize@1.5.2",
      "angular-ui-router": "github:angular-ui/ui-router@0.2.13",
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "github:frankwallis/plugin-typescript@4.0.5": {
      "typescript": "npm:typescript@1.8.9"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:typescript@1.8.9": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
