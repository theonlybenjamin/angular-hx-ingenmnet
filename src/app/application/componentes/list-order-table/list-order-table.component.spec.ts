import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrderTableComponent } from './list-order-table.component';

describe('ListOrderTableComponent', () => {
  let component: ListOrderTableComponent;
  let fixture: ComponentFixture<ListOrderTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOrderTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
