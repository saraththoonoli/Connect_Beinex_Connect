import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BxInputFieldComponent } from '../../atom/bx-input-field/bx-input-field.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BxTextAreaComponent } from '../../atom/bx-text-area/bx-text-area.component';
import { BxLabelComponent } from '../../atom/bx-label/bx-label.component';
import { BxSubmitBtnComponent } from '../../atom/bx-submit-btn/bx-submit-btn.component';
import { BxRounndBtnComponent } from '../../atom/bx-rounnd-btn/bx-rounnd-btn.component';
import { SharedService } from '../../../core/shared.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { BxFileUploadComponent } from '../../atom/bx-file-upload/bx-file-upload.component';
import { BxRoundBadgeComponent } from '../../atom/bx-round-badge/bx-round-badge.component';
import { RoundBadgeComponent } from '../../../src/app/bx-widget/atom/round-badge/round-badge.component';
@Component({
  selector: 'app-bx-form',
  standalone: true,
  imports: [CommonModule, BxInputFieldComponent,
    BxTextAreaComponent,
    BxLabelComponent,
    BxSubmitBtnComponent,
    BxRounndBtnComponent,
    BxFileUploadComponent,
    FormsModule, ReactiveFormsModule, RouterModule, RouterOutlet,
    BxRoundBadgeComponent,
  ],
  templateUrl: './bx-form.component.html',
  styleUrl: './bx-form.component.scss'
})
export class BxFormComponent {



  // FormGroup to manage form controls
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private dataSharingService: SharedService,
    private router: Router) {
    // Initialize the FormGroup with form controls
    this.myForm = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      company: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      job: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{10}$/),
      ]),
      country: new FormControl('', Validators.required),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500),
      ]),
      comment: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500),
      ]),
      inputFile: new FormControl(''),
      badge: new FormControl(''),
    });
  }

  // Handle form submission
  onSubmit() {
    // Handle form submission logic here
    console.log(this.myForm.value);
  
    // Show confirmation dialog
    const isConfirmed = window.confirm("Are you sure you fill all necessary datas, you want to submit the form?");
    
    if (isConfirmed) {
      this.dataSharingService.updateFormData(this.myForm.value);
      this.router.navigate(['/display']);
    } else {
      alert('Back to the form , Fill all the datas.')
      console.log("Form submission canceled.");
    }
  }
  
  // Handle file input change
  onFileChange(event: any) {
    if (event && event.target) {
      const fileInput = event.target;
      if (fileInput.files.length > 0) {
        const fullPath = fileInput.files[0].name;
        const fileName = fullPath.split('\\').pop() || fullPath.split('/').pop();
        this.myForm.get('inputFile')?.setValue(fileName);
      } else {
        this.myForm.get('inputFile')?.setValue(null);
      }
    }
  }
}
