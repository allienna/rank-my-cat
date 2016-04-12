import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup} from 'angular2/common';

@Component({
    selector: 'add-cat-form',
    templateUrl: 'app/add-cat.html'
})
export class AddCatComponent {
    form: ControlGroup;
    
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            name: [],
            url: []
        })
    }
}