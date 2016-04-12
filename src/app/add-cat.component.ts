import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {CanDeactivate} from 'angular2/router'

import {StaticValidators} from './validator/staticValidators';

@Component({
    selector: 'add-cat-form',
    templateUrl: 'app/add-cat.html'
})
export class AddCatComponent implements CanDeactivate {
    form: ControlGroup;
    
    constructor(fb: FormBuilder) {
        this.form = fb.group({
            name: ['', Validators.required],
            url: ['', 
                Validators.compose([
                    Validators.required,
                    StaticValidators.url
                ])
            ]
        })
    }
    
    routerCanDeactivate() {
        if(this.form.dirty) {
            return confirm('You have unsaved changes. Are you sure you want to navigate away?');
        }
        return true;
    }
}