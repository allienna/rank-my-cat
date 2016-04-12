import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {CatCard} from './cat-card.component';
import {NavbarComponent} from './navbar.component';
import {CatsComponent} from './cats.component';
import {AddCatComponent} from './add-cat.component'

@Component({
    selector: 'rank-my-cat-app',
    templateUrl: 'app/rank-my-cat.html',
    directives: [
        ROUTER_DIRECTIVES,
        NavbarComponent]
})
@RouteConfig([
    {path: '/cats', name: 'Cats', component: CatsComponent, useAsDefault: true},
    {path: '/add', name: 'Add', component: AddCatComponent},
    {path: '/*other', name: 'Other', redirectTo: ['Cats']}
])
export class RankMyCatApp {
    
}
