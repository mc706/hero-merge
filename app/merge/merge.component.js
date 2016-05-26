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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var hero_model_1 = require('../services/hero.model');
var heroService_1 = require('../services/heroService');
require('rxjs/Rx');
var heroCard_component_1 = require('../heroCard/heroCard.component');
var MergeComponent = (function () {
    function MergeComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
    }
    MergeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.listHeroes()
            .subscribe(function (res) { return _this.heroes = res; }, function (err) { return console.error(err); });
    };
    MergeComponent.prototype.onSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        this.heroService.createHero(this.combined)
            .subscribe(function (new_event) { return _this.router.navigate(['/']); });
    };
    MergeComponent.prototype.selectA = function (id) {
        this.heroA = this.heroes.find(function (h) { return h.id === parseInt(id, 10); });
    };
    MergeComponent.prototype.selectB = function (id) {
        this.heroB = this.heroes.find(function (h) { return h.id === parseInt(id, 10); });
    };
    MergeComponent.prototype.addPower = function (power) {
        if (this.combined.powers.length < 5 && this.combined.powers.indexOf(power) === -1) {
            this.combined.powers.push(power);
        }
    };
    MergeComponent.prototype.removePower = function (index) {
        this.combined.powers.splice(index, 1);
    };
    MergeComponent.prototype.combine = function () {
        var weaknesses = this.heroA.weaknesses.concat(this.heroB.weaknesses);
        this.combined = new hero_model_1.Hero('', '', '', {
            intelligence: 50,
            strength: 50,
            speed: 50,
            durability: 50,
            power: 50,
            combat: 50
        }, [], weaknesses);
        this.combined_powers = this.heroA.powers.concat(this.heroB.powers);
    };
    MergeComponent = __decorate([
        core_1.Component({
            selector: 'hm-merge-page',
            templateUrl: 'app/merge/merge.html',
            directives: [
                router_1.ROUTER_DIRECTIVES,
                heroCard_component_1.HeroCardComponent,
                common_1.FORM_DIRECTIVES,
            ]
        }), 
        __metadata('design:paramtypes', [heroService_1.HeroService, router_1.Router])
    ], MergeComponent);
    return MergeComponent;
})();
exports.MergeComponent = MergeComponent;
//# sourceMappingURL=merge.component.js.map