import {Component, OnInit} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {Hero} from '../services/hero.model';
import {HeroService} from '../services/heroService';
import 'rxjs/Rx';

import {HeroCardComponent} from '../heroCard/heroCard.component';

@Component({
    selector: 'hm-merge-page',
    templateUrl: 'app/merge/merge.html',
    directives: [
        ROUTER_DIRECTIVES,
        HeroCardComponent,
        FORM_DIRECTIVES,
    ]
})
export class MergeComponent implements OnInit {
    public heroes: Hero[];
    public heroA: Hero;
    public heroB: Hero;
    public combined: Hero;
    public combined_powers: string[];

    constructor(private heroService: HeroService,
                private router: Router) {
    }

    ngOnInit() {
        this.heroService.listHeroes()
            .subscribe(
                res => this.heroes = res,
                err => console.error(err)
            );
    }

    onSubmit(event) {
        event.preventDefault();

        this.heroService.createHero(this.combined)
            .subscribe(
                (new_event) => this.router.navigate(['/'])
            );
    }

    selectA(id) {
        this.heroA = this.heroes.find((h) => h.id === parseInt(id, 10));
    }

    selectB(id) {
        this.heroB = this.heroes.find((h) => h.id === parseInt(id, 10));
    }

    addPower(power) {
        if (this.combined.powers.length < 5 && this.combined.powers.indexOf(power) === -1) {
            this.combined.powers.push(power);
        }
    }

    removePower(index) {
        this.combined.powers.splice(index, 1);
    }

    combine() {
        let weaknesses = this.heroA.weaknesses.concat(this.heroB.weaknesses);
        this.combined = new Hero('', '', '', {
            intelligence: 50,
            strength: 50,
            speed: 50,
            durability: 50,
            power: 50,
            combat: 50
        }, [], weaknesses);
        this.combined_powers = this.heroA.powers.concat(this.heroB.powers);
    }
}
