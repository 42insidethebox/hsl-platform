import { ValidatorFn, AbstractControl } from '@angular/forms';

export function oneOf(allowedValues: any[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValueAllowed = allowedValues.includes(control.value);
    return isValueAllowed ? null : { oneOf: { value: control.value } };
  };
}
