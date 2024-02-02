import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxNavComponent } from './bx-nav.component';

describe('BxNavComponent', () => {
  let component: BxNavComponent;
  let fixture: ComponentFixture<BxNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
