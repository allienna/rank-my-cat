import {Component} from 'angular2/core';
import {RouterLink, ROUTER_DIRECTIVES, Router} from 'angular2/router';

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar.html',
    directives: [RouterLink, ROUTER_DIRECTIVES]
})
export class NavbarComponent {
    
    constructor(private _router: Router){}
    
    isCurrentRoute(route) {
        var instruction = this._router.generate(route);
        return this._router.isRouteActive(instruction);
    }
}