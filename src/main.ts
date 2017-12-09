import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app/app.module';

// Polyfills
import 'zone.js/dist/zone';

// Angular 5
import '@angular/platform-browser-dynamic';
import '@angular/common';
import '@angular/core';

// RxJS
import 'rxjs';

platformBrowserDynamic().bootstrapModule(AppModule);
