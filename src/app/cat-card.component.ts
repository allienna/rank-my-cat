import {Component, Input} from 'angular2/core';
import {TimeAgoPipe} from 'angular2-moment';

import {SecondsToPipe} from './pipe/secondsToDate.pipe';
import {Cat} from './model/cat.model';

@Component({
    selector: 'cat-card',
    templateUrl: 'app/cat-card.html',
    pipes: [TimeAgoPipe, SecondsToPipe]
})
export class CatCard {
    @Input('cat') cat: Cat;
}