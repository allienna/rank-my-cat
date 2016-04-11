import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Observable} from 'rxjs/Observable';
import {CatService} from "./service/cat.service";
import {Cat} from "./model/cat.model";


@Component({
    selector: 'rank-my-cat-app',
    providers: [ROUTER_PROVIDERS, CatService],
    templateUrl: 'app/rank-my-cat.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: []
})
@RouteConfig([])
export class RankMyCatApp implements OnInit {
    cats: Observable<Cat[]>;

    constructor(private catService: CatService) {
    }
    
    ngOnInit() {
        this.cats = this.catService.getAll();
    }
}
