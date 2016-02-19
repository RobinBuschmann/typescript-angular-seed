System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm_packages/github/*"
  },

  map: {
    "angular": "github:angular/bower-angular@1.5.0",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.18",
    "at": "github:RobinBuschmann/angular-typescript@0.0.10",
    "github:angular-ui/ui-router@0.2.18": {
      "angular": "github:angular/bower-angular@1.5.0"
    }
  }
});
