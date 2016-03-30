/**
 * Created by aurelienallienne on 30/03/2016.
 */
import {Injectable} from 'angular2/core';
import {AngularFire} from 'angularfire2';

@Injectable()
export class CatService {

    constructor(private db:AngularFire) {

    }

    getAll() {
        return this.db.list('/cats');
    }
}