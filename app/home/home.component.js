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
var heroService_1 = require('../services/heroService');
require('rxjs/Rx');
var logger_service_1 = require('../blocks/logger.service');
var heroCard_component_1 = require('../heroCard/heroCard.component');
var HomeComponent = (function () {
    function HomeComponent(heroService, log) {
        this.heroService = heroService;
        this.log = log;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.listHeroes()
            .subscribe(function (res) { return _this.heroes = res; }, function (err) { return console.error(err); });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'hm-home-page',
            templateUrl: 'app/home/home.html',
            directives: [heroCard_component_1.HeroCardComponent]
        }), 
        __metadata('design:paramtypes', [heroService_1.HeroService, logger_service_1.LoggerService])
    ], HomeComponent);
    return HomeComponent;
})();
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map