import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router';
import {HTTP_PROVIDERS } from '@angular/http';
import {AppComponent} from './app.component';
import {LoggerService} from './blocks/logger.service';
import {HeroService} from './services/heroService';

declare var ENV: string;

if (ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [
    LoggerService, ROUTER_PROVIDERS, HeroService, HTTP_PROVIDERS
]);
