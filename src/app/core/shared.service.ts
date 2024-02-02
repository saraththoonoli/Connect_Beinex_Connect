import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';   
// type of observable BehaviorSubjectfrom rxjs library.
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
 // Private BehaviorSubject to store and manage the form data
  private formDataSubject = new BehaviorSubject<any>(null);
  // Public observable derived from the BehaviorSubject
  formData$ = this.formDataSubject.asObservable();
 // Method to update the form data by emitting a new value to the BehaviorSubject
  updateFormData(formData: any) {
    this.formDataSubject.next(formData);
  }
}
