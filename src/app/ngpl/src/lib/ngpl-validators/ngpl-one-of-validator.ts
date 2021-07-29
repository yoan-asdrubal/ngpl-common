import {FormGroup} from '@angular/forms';

export function ngplOneOfValidator(values: any[], message = null): any {

  return (form: FormGroup) => {
    const value = form.value;
    const exist = values.some(s => s === value);

    if (!exist) {
      return {
        oneOf: {
          message: message || 'Valor no permitido'
        }
      };
    }
    return null;
  };
}
