import { TestBed } from '@angular/core/testing';

import { TableSelectedService } from './table-selected.service';

describe('TableSelectedService', () => {
  let service: TableSelectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableSelectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
