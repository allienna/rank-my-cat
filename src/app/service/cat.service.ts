import {Injectable} from 'angular2/core';
import {AngularFire} from 'angularfire2';

import {Cat} from '../model/cat.model';

@Injectable()
export class CatService {

    constructor(private db:AngularFire) {

    }

    get() {
        return this.db.list('/cats');
    }
    
    update(cat: Cat) {
        // TODO
        // return this.db.save(cat);
        cat.lastUpdate = new Date().getTime();
        console.log('Update not yet implemented by angularfire2');
        console.log(cat);
    }
    
    add(cat: Cat) {
        return this.db.list('/cats').add(cat);
    }
}