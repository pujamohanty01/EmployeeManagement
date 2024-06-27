import { AbstractControl, ValidationErrors } from "@angular/forms";
export function emailValidator(control: AbstractControl): ValidationErrors |null {
    const value = control.value;
    const emailPattern =/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const phonePattern = /^[0-9]{10}$/;
    if(!value){
        return {required: true};
    }
const isValidEmail = emailPattern.test(value);
//const isValidPhone = phonePattern.test(value);
//if(!isValidEmail && !isValidPhone){
if(!isValidEmail){
    return {email: true};
}
    return null;
}
