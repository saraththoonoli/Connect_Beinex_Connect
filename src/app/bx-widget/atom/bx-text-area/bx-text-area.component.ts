import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bx-text-area',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './bx-text-area.component.html',
  styleUrl: './bx-text-area.component.scss'
})
export class BxTextAreaComponent {
  // @Input() type!:string;
  @Input() name!:string;
  @Input() control!:FormControl;
  @Input() placeHolder!:string;
  @Input() iconSrc!:string;
  @Input() customStyle!: { [key: string]: string };

}
