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
var http_1 = require('@angular/http');
require('rxjs/Rx');
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.BASE_URL = 'https://hero-merge.herokuapp.com/';
        this.API = this.BASE_URL + this.API_KEY;
    }
    HeroService.prototype.getApiKey = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .get(this.BASE_URL + "getApiKey/", { headers: headers })
            .map(function (res) {
            _this.API_KEY = res.json().apiKey;
            _this.API = _this.BASE_URL + _this.API_KEY;
            return _this.API_KEY;
        });
    };
    HeroService.prototype.listHeroes = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .get(this.API + "/heroes/", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HeroService.prototype.getHero = function (id) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .get(this.API + "/heroes/" + id + "/", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HeroService.prototype.createHero = function (hero) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.API + "/heroes/", JSON.stringify(hero), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HeroService.prototype.updateHero = function (id, change) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http
            .patch(this.API + "/heroes/" + id + "/", JSON.stringify({ change: change }), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
})();
exports.HeroService = HeroService;
//# sourceMappingURL=heroService.js.map