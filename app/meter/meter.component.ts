import {Component, Input} from '@angular/core';

@Component({
    selector: 'hm-meter',
    templateUrl: 'app/meter/meter.html',
    directives: []
})
export class MeterComponent {
    @Input() value: number;
}
