var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var meter_component_1 = require('../meter/meter.component');
var HeroCardComponent = (function () {
    function HeroCardComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], HeroCardComponent.prototype, "hero", void 0);
    HeroCardComponent = __decorate([
        core_1.Component({
            selector: 'hm-hero-card',
            templateUrl: 'app/heroCard/heroCard.html',
            directives: [meter_component_1.MeterComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroCardComponent);
    return HeroCardComponent;
})();
exports.HeroCardComponent = HeroCardComponent;
//# sourceMappingURL=heroCard.component.js.map