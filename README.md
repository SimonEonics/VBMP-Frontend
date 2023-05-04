# Angularapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Communication with backend
The frontend communicates with the backend using Web API. Instead of manually crafting all requests, a generated client will be used. [OpenAPITools](https://github.com/OpenAPITools) is a tool that can generate a typescript client based on the OpenAPI definition. **Note**: This tool requires java to be installed on the development machine. The tool has been installed as a development dependency, hence after having installed all NPM packages the tool is readily available. OpenAPITools require either a url or a json of the OpenAPI in order to generate a client; here we make use of the fact that jHipster is already serving an Open API on 'http://localhost:8080/v3/api-docs/springdocDefault'. The generation of a client has been put in a script that can be launched using NPM (see scripts section of package.json):  `npm run generate-api`. This custom script makes use of arguments specified in the swagger-codegen-config.json file; the available options are listed [here](https://openapi-generator.tech/docs/generators/typescript-angular).


Angular needs to be configured in order to inject the generated services. [This blog post ](https://www.kevinboosten.dev/how-i-use-an-openapi-spec-in-my-angular-projects) explains how this is achieved.


The generated code includes a generated readme.md that gives instruction on how to register the generated services as configured providers. 

[https://medium.com/@shijin_nath/angular-right-file-structure-and-best-practices-that-help-to-scale-2020-52ce8d967df5](https://medium.com/@shijin_nath/angular-right-file-structure-and-best-practices-that-help-to-scale-2020-52ce8d967df5)
[https://www.tektutorialshub.com/angular/angular-folder-structure-best-practices/](https://www.tektutorialshub.com/angular/angular-folder-structure-best-practices/)
[CC](https://medium.com/@motcowley/angular-folder-structure-d1809be95542)  
