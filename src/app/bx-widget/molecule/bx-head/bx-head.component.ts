import { Component } from '@angular/core';
import { BxButtonScheduleComponent } from '../../atom/bx-button-schedule/bx-button-schedule.component';

@Component({
  selector: 'app-bx-head',
  standalone: true,
  imports: [BxButtonScheduleComponent],
  templateUrl: './bx-head.component.html',
  styleUrl: './bx-head.component.scss'
})
export class BxHeadComponent {

}
