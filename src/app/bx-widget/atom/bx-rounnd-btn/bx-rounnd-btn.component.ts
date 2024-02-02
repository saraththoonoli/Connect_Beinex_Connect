import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bx-rounnd-btn',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './bx-rounnd-btn.component.html',
  styleUrl: './bx-rounnd-btn.component.scss'
})
export class BxRounndBtnComponent {
onSelectChange($event: Event) {
throw new Error('Method not implemented.');
}
  @Input() type!:string;
  @Input() name!:string;
  @Input() control!:FormControl;
  @Input() placeHolder!:string;
  @Input() iconSrc!:string;
}
