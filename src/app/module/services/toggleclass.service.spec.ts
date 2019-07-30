import { TestBed } from '@angular/core/testing';

import { ToggleClassService } from './toggleclass.service';

describe('ToggleclassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToggleClassService = TestBed.get(ToggleClassService);
    expect(service).toBeTruthy();
  });
});
