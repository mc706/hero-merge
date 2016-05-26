var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var logger_service_1 = require('./blocks/logger.service');
var heroService_1 = require('./services/heroService');
if (ENV === 'production') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    logger_service_1.LoggerService, router_1.ROUTER_PROVIDERS, heroService_1.HeroService, http_1.HTTP_PROVIDERS
]);
//# sourceMappingURL=main.js.map