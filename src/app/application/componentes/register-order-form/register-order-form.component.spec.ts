import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOrderFormComponent } from './register-order-form.component';

describe('RegisterOrderFormComponent', () => {
  let component: RegisterOrderFormComponent;
  let fixture: ComponentFixture<RegisterOrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterOrderFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
