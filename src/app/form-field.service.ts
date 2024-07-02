import { Injectable } from '@angular/core';
import { FormField } from './form-field.model';

@Injectable({
  providedIn: 'root'
})
export class FormFieldService {
  private formFields: FormField[] = [];

  getFormFields(): FormField[] {
    return this.formFields;
  }

  addField(field: FormField): void {
    this.formFields.push(field);
  }

  removeField(index: number): void {
    this.formFields.splice(index, 1);
  }
}
