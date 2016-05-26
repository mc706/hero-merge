import {Component, OnInit} from '@angular/core';
import {Hero} from '../services/hero.model';
import {HeroService} from '../services/heroService';
import 'rxjs/Rx';
import {LoggerService} from '../blocks/logger.service';
import {HeroCardComponent} from '../heroCard/heroCard.component';

@Component({
    selector: 'hm-home-page',
    templateUrl: 'app/home/home.html',
    directives: [HeroCardComponent]
})
export class HomeComponent implements OnInit {
    public heroes: Hero[];

    constructor(private heroService: HeroService,
                private log: LoggerService) {
    }

    ngOnInit() {
        this.heroService.listHeroes()
            .subscribe(
                res => this.heroes = res,
                err => console.error(err)
            );
    }
}
