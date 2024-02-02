import { Component } from '@angular/core';
import { SharedService } from '../../../core/shared.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BxNavbarComponent } from '../bx-navbar/bx-navbar.component';
import { BxFooterBottomComponent } from '../bx-footer-bottom/bx-footer-bottom.component';

@Component({
  selector: 'app-bx-display',
  standalone: true,
  imports: [CommonModule, BxNavbarComponent, BxFooterBottomComponent],
  templateUrl: './bx-display.component.html',
  styleUrl: './bx-display.component.scss'
})
export class BxDisplayComponent {
  constructor(private dataSharingService: SharedService) { }

  // Observable to access and display the form data
  formData$ = this.dataSharingService.formData$;
}
