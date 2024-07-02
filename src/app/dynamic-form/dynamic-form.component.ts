import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormFieldService } from '../form-field.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formFieldService: FormFieldService, private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.formFieldService.getFormFields().forEach(field => {
      const validators = field.required ? [Validators.required] : [];
      if (field.type === 'checkbox') {
        this.form.addControl(field.label, this.fb.control(false, validators));
      } else {
        this.form.addControl(field.label, this.fb.control('', validators));
      }
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      alert('Form submitted successfully!');
    } else {
      this.markAllAsTouched();
      alert('Please fill out the required fields.');
    }
  }

  markAllAsTouched(): void {
    Object.keys(this.form.controls).forEach(field => {
      const control = this.form.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }

  get fields() {
    return this.formFieldService.getFormFields();
  }

  removeField(index: number): void {
    const field = this.formFieldService.getFormFields()[index];
    this.form.removeControl(field.label);
    this.formFieldService.removeField(index);
  }
}
