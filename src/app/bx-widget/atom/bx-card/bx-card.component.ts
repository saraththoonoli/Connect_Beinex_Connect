import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bx-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './bx-card.component.html',
  styleUrl: './bx-card.component.scss'
})
export class BxCardComponent {
  @Input() backgroundColor: string = '';
  @Input() title: string = '';
  @Input() imagePath: string = '';
  @Input() description: string = '';
  @Input() rows: { iconPath: string; title: string;icon: string;  }[] = [];
  @Input() rowss: {  title: string  }[] = [];
}
