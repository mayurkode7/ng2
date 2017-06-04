import { AbstractControl } from "@angular/forms";

export function validateUrl(control: AbstractControl){

    
    if((control.value.startsWith('https')) && (control.value.includes('.io'))){
        return null;  // this means input has no errors
    }else {
        return { validUrl : true}    // when error return object
    }
}