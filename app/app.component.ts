import {Component, OnInit} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, Router} from '@angular/router';
import {APP_ROUTES} from './app.routes';
import {NavbarComponent} from './navbar/navbar.component';
import {LoggerService} from './blocks/logger.service';
import {HeroService} from './services/heroService';

@Component({
    selector: 'hm-main-app',
    templateUrl: 'app/app.html',
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})
@Routes(APP_ROUTES)
export class AppComponent implements OnInit {
    public appRoutes: any[];
    private logger: LoggerService;

    constructor(logger: LoggerService, private heroService: HeroService, private router: Router) {
        this.logger = logger;
        this.appRoutes = APP_ROUTES;
    }

    ngOnInit() {
        this.heroService.getApiKey().subscribe(
            () => this.router.navigate(['/refresh'])
        );
    }
}
