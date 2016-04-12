import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';

import {StaticValidators} from './validator/staticValidators';

@Component({
    selector: 'add-cat-form',
    templateUrl: 'app/add-cat.html'
})
export class AddCatComponent {
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
}