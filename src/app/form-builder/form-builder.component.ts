import { Component } from '@angular/core';
import { FormFieldService } from '../form-field.service';
import { FormField } from '../form-field.model';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {
  fieldType: string = 'text';
  label: string = '';
  placeholder: string = '';
  options: string[] = [];
  required: boolean = false;
  optionString: string = '';

  constructor(private formFieldService: FormFieldService) {}

  addField(): void {
    const newField: FormField = {
      type: this.fieldType,
      label: this.label,
      placeholder: this.placeholder,
      options: this.optionString ? this.optionString.split(',') : [],
      required: this.required
    };
    this.formFieldService.addField(newField);
    this.resetForm();
  }

  resetForm(): void {
    this.fieldType = 'text';
    this.label = '';
    this.placeholder = '';
    this.optionString = '';
    this.required = false;
  }

  get fields() {
    return this.formFieldService.getFormFields();
  }

  removeField(index: number): void {
    this.formFieldService.removeField(index);
  }
}
