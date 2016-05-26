var home_component_1 = require('./home/home.component');
var merge_component_1 = require('./merge/merge.component');
var create_component_1 = require('./create/create.component');
exports.APP_ROUTES = [
    { path: '/', name: 'Home', component: home_component_1.HomeComponent },
    { path: '/new', name: 'Create', component: create_component_1.CreateComponent },
    { path: '/merge', name: 'Merge', component: merge_component_1.MergeComponent }
];
//# sourceMappingURL=app.routes.js.map