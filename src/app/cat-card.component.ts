import {Component, Input} from 'angular2/core';
import {TimeAgoPipe} from 'angular2-moment';

import {CatService} from './service/cat.service';
import {Cat} from './model/cat.model';
import {SecondsToPipe} from './pipe/secondsToDate.pipe';


@Component({
    selector: 'cat-card',
    templateUrl: 'app/cat-card.html',
    pipes: [TimeAgoPipe, SecondsToPipe],
    providers: [CatService]
})
export class CatCard {
    @Input('cat') cat: Cat;
    private voted: number = 0;
    
    constructor(private _catService: CatService) {}

    unvote() {
        if (this.voted == -1)  {
            return;
        }
        this.voted--;
        this._catService.update(this.cat);
    }

    vote() {
        if (this.voted == 1)  {
            return;
        }
        this.voted++;
        this._catService.update(this.cat);
    }
}