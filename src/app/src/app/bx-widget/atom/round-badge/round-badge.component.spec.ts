import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundBadgeComponent } from './round-badge.component';

describe('RoundBadgeComponent', () => {
  let component: RoundBadgeComponent;
  let fixture: ComponentFixture<RoundBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoundBadgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoundBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
