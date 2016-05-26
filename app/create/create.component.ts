import {Component} from '@angular/core';
import {FORM_DIRECTIVES, COMMON_DIRECTIVES, CORE_DIRECTIVES} from '@angular/common';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {Hero} from '../services/hero.model';
import {HeroService} from '../services/heroService';
import 'rxjs/Rx';
import {LoggerService} from '../blocks/logger.service';

@Component({
    selector: 'hm-create-page',
    templateUrl: 'app/create/create.html',
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, COMMON_DIRECTIVES, CORE_DIRECTIVES]
})
export class CreateComponent {
    public hero: Hero = new Hero('', '', '', {
        intelligence: 50,
        strength: 50,
        speed: 50,
        durability: 50,
        power: 50,
        combat: 50
    }, [], []);
    public new_power: string;
    public new_weakness: string;
    public errorMessage: string;

    constructor(private heroService: HeroService,
                private log: LoggerService,
                private router: Router) {
    }


    addPower() {
        if (this.new_power) {
            this.hero.powers.push(this.new_power);
            this.new_power = '';
        }
    }

    removePower(i) {
        this.hero.powers.splice(i, 1);
    }

    addWeakness() {
        if (this.new_weakness) {
            this.hero.weaknesses.push(this.new_weakness);
            this.new_weakness = '';
        }
    }

    removeWeakness(i) {
        this.hero.weaknesses.splice(i, 1);
    }

    onSubmit(event) {
        event.preventDefault();

        this.heroService.createHero(this.hero)
            .subscribe(
                (new_event) => this.router.navigate(['/']),
                (error) => {
                    this.errorMessage = error.message;
                }
            );
    }
}
