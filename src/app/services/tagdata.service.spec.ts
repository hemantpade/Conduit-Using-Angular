import { TestBed } from '@angular/core/testing';

import { TagdataService } from './tagdata.service';

describe('TagdataService', () => {
  let service: TagdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
