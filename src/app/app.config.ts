import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// this file was auto created by the CLI
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
