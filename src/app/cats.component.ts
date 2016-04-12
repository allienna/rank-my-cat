import {Component, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

import {CatCard} from './cat-card.component'
import {CatService} from './service/cat.service';
import {Cat} from './model/cat.model';

@Component({
    selector: 'cats',
    template: `
            <div class="card-columns">
                <div *ngFor="#cat of cats | async">
                    <cat-card [cat]='cat'></cat-card>
                </div>
            </div>
    `,
    providers: [CatService],
    directives: [CatCard]
})
export class CatsComponent implements OnInit {
    cats: Observable<Cat[]>;

    constructor(private catService: CatService) {
    }
    
    ngOnInit() {
        this.cats = this.catService.get();
    }
}