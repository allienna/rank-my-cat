import {Control} from 'angular2/common';

export class StaticValidators {
    static url(control: Control) {
        var regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
        var valid = regex.test(control.value);
        return valid ? null : {invalidUrl: true};
    }
}