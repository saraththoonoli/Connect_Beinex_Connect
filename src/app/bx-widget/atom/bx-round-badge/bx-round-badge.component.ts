import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bx-round-badge',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './bx-round-badge.component.html',
  styleUrl: './bx-round-badge.component.scss'
})
export class BxRoundBadgeComponent {
  checkboxItems = [
    { label: 'Events', },
    { label: 'Services',  },
    { label: 'Careers',  },
    { label: 'Partner info',  },
    { label: 'Blogs and other content',}
  ];

  

}
