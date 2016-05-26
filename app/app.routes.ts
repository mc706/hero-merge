import {HomeComponent} from './home/home.component';
import {MergeComponent} from './merge/merge.component';
import {CreateComponent} from './create/create.component';

export var APP_ROUTES: any[] = [
    { path: '/', name: 'Home', component: HomeComponent },
    { path: '/new', name: 'Create', component: CreateComponent },
    { path: '/merge', name: 'Merge', component: MergeComponent }
];
