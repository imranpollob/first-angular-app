import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// this file was auto created by the CLI
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
