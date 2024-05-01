import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOrderComponent } from './register-order.component';

describe('RegisterOrderComponent', () => {
  let component: RegisterOrderComponent;
  let fixture: ComponentFixture<RegisterOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
