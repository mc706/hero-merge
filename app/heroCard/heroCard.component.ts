import {Component, Input} from '@angular/core';
import {Hero} from '../services/hero.model';
import {MeterComponent} from '../meter/meter.component';

@Component({
    selector: 'hm-hero-card',
    templateUrl: 'app/heroCard/heroCard.html',
    directives: [MeterComponent]
})
export class HeroCardComponent {
    @Input() hero: Hero[];
}
