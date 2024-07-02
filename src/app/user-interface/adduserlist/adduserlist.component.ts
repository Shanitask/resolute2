import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-adduserlist',
  templateUrl: './adduserlist.component.html',
  styleUrls: ['./adduserlist.component.css']
})
export class AdduserlistComponent implements OnInit {
  submitted = false;
  addUserForm:any;
  alert: boolean = false;
  isEditMode = false;
  Id: any;
  errorMessage: string = '';

  constructor(
    private src: ServiceService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      gender: ['', Validators.required],
      role: ['', Validators.required],
      termsAccepted: [false], // Checkbox Validation
      comments: ['', Validators.required]
    });

    const userId = this.activatedRoute.snapshot.params['id'];
    if (userId) {
      this.isEditMode = true;
      try {
        const userData = this.src.getUserById(userId);
        if (userData) {
          this.addUserForm.patchValue(userData);
          this.addUserForm.controls['termsAccepted'].setValue(userData.termsAccepted);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        this.errorMessage = 'Error fetching user data. Please try again later.';
      }
    }
  }

  async CreateUser() {
    this.submitted = true;

    // Stop the process if form is invalid
    if (this.addUserForm.invalid) {
      this.errorMessage = 'Please correct the errors in the form.';
      alert("All field are Mandatory")
      return;
    }

    const formData = this.addUserForm.value;

    try {
      if (this.isEditMode) {
        const userId = this.activatedRoute.snapshot.params['id'];
        this.src.updateUser(userId, formData); 
        console.log('User Updated Successfully');
        alert('User Updated Successfully!');
        this.alertService.setMessage('Data added successfully!', 'success');
        this.alert = true;
      } else {
        
        this.src.addUser(formData);
        console.log('Data Submitted Successfully');
        alert('Data Submitted Successfully');
        this.alert = true;
      }
      this.router.navigate(['User_Interface/User']);
    } catch (error) {
      console.error('Error saving user data:', error);
      this.errorMessage = 'Error saving user data. Please try again later.';
    }

    this.errorMessage = '';
  }

  closeAlert() {
    this.alert = false;
  }
}
