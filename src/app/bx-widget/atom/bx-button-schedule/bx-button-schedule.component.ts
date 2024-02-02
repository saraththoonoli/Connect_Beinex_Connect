import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bx-button-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bx-button-schedule.component.html',
  styleUrl: './bx-button-schedule.component.scss'
})
export class BxButtonScheduleComponent {
  @Input() icon: string = '';
  @Input() text: string = 'Schedule a call'; 
  @Input() backgroundColor: string = ' rgba(16, 56, 91, 1)'; 
  @Input() textColor: string = '#fff'; 

  click(){
    alert('clicked')
  }
}
