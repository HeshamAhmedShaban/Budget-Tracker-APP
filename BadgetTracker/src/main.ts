import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, RouterModule } from '@angular/router';
import { routeConfig } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';


bootstrapApplication(AppComponent, {
  providers: [
                provideProtractorTestingSupport(),
                provideRouter(routeConfig),
                provideAnimations(),
                importProvidersFrom(RouterModule.forRoot(routeConfig)),
                provideHttpClient()
            ]
}).catch((err) => console.error(err));
