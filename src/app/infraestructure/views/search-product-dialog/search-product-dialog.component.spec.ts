import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProductDialogComponent } from './search-product-dialog.component';

describe('SearchProductDialogComponent', () => {
  let component: SearchProductDialogComponent;
  let fixture: ComponentFixture<SearchProductDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchProductDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchProductDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
