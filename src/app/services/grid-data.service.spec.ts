import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import { GridDataService } from './grid-data.service';

describe('GridDataService', () => {
  let service: GridDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GridDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
