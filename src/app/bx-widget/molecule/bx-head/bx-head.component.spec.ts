import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxHeadComponent } from './bx-head.component';

describe('BxHeadComponent', () => {
  let component: BxHeadComponent;
  let fixture: ComponentFixture<BxHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxHeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
