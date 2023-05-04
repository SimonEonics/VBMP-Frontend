import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiModule, Configuration, ConfigurationParameters } from '@api';
import {  environment } from '@environment/environment';


export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    basePath: environment.endpoints.apiUrl,
  };
  return new Configuration(params);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule, ApiModule.forRoot(apiConfigFactory)
  ]
})
export class CoreApiModule { }
