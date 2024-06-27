import { AbstractControl } from "@angular/forms";

export function CompareValidator(controlOne?: AbstractControl| undefined| null, controlTwo?: AbstractControl | undefined| null) {
    return () => {
    if ((controlOne && controlTwo) && controlOne.value !== controlTwo.value)
      return { Compare: true };
    return null;
  }}