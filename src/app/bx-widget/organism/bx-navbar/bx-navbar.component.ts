import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BxButtonScheduleComponent } from '../../atom/bx-button-schedule/bx-button-schedule.component';
import { BxNavComponent } from '../../molecule/bx-nav/bx-nav.component';
import { BxHeadComponent } from '../../molecule/bx-head/bx-head.component';

@Component({
  selector: 'app-bx-navbar',
  standalone: true,
  imports: [CommonModule,BxButtonScheduleComponent,BxNavComponent,BxHeadComponent],
  templateUrl: './bx-navbar.component.html',
  styleUrl: './bx-navbar.component.scss'
})
export class BxNavbarComponent {
 ClickEvent(){
    alert("Button Clicked");
  }
}
