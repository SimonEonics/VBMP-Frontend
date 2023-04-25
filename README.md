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
The frontend communicates with the backend using Web API. Instead of manually crafting all requests, a generated client will be used. [OpenAPITools](https://github.com/OpenAPITools) is a tool that can generate a typescript client based on the OpenAPI definition. **Note**: This tool requires java to be installed on the development machine. The tool has been installed as a development dependancy, hence after having installed all NPM packages the tool is readily available.

jHipster is already serving an Open API on 'http://localhost:8080/v3/api-docs/springdocDefault' from which a client can be generated.
From the root of the repository, run 

./node_modules/.bin/openapi-generator-cli generate -i http://localhost:8080/v3/api-docs/springdocDefault -g typescript-angular --skip-validate-spec -o /src/app/client

  
