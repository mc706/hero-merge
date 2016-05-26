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
var logger_service_1 = require('../blocks/logger.service');
var CreateComponent = (function () {
    function CreateComponent(heroService, log, router) {
        this.heroService = heroService;
        this.log = log;
        this.router = router;
        this.hero = new hero_model_1.Hero('', '', '', {
            intelligence: 50,
            strength: 50,
            speed: 50,
            durability: 50,
            power: 50,
            combat: 50
        }, [], []);
    }
    CreateComponent.prototype.addPower = function () {
        if (this.new_power) {
            this.hero.powers.push(this.new_power);
            this.new_power = '';
        }
    };
    CreateComponent.prototype.removePower = function (i) {
        this.hero.powers.splice(i, 1);
    };
    CreateComponent.prototype.addWeakness = function () {
        if (this.new_weakness) {
            this.hero.weaknesses.push(this.new_weakness);
            this.new_weakness = '';
        }
    };
    CreateComponent.prototype.removeWeakness = function (i) {
        this.hero.weaknesses.splice(i, 1);
    };
    CreateComponent.prototype.onSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        this.heroService.createHero(this.hero)
            .subscribe(function (new_event) { return _this.router.navigate(['/']); }, function (error) {
            _this.errorMessage = error.message;
        });
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: 'hm-create-page',
            templateUrl: 'app/create/create.html',
            directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES, common_1.COMMON_DIRECTIVES, common_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [heroService_1.HeroService, logger_service_1.LoggerService, router_1.Router])
    ], CreateComponent);
    return CreateComponent;
})();
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map