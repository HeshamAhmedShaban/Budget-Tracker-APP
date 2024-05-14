import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, RouterModule } from '@angular/router';
import { routeConfig } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
bootstrapApplication(AppComponent, {
  providers: [
                provideProtractorTestingSupport(),
                provideRouter(routeConfig),
                importProvidersFrom(RouterModule.forRoot(routeConfig)),
                provideHttpClient()
            ]
}).catch((err) => console.error(err));

  // bootstrapApplication(AppComponent, {
  //   providers: [   
  //                   provideProtractorTestingSupport(),
  //                   provideRouter(routeConfig),
  //               ]
  //   }).catch((err) => console.error(err));