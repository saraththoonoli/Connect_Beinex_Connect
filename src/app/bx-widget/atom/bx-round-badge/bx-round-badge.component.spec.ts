import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxRoundBadgeComponent } from './bx-round-badge.component';

describe('BxRoundBadgeComponent', () => {
  let component: BxRoundBadgeComponent;
  let fixture: ComponentFixture<BxRoundBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxRoundBadgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxRoundBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
