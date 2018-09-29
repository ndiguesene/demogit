import { TestBed } from '@angular/core/testing';

import { VueCarteService } from './vue-carte.service';

describe('VueCarteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VueCarteService = TestBed.get(VueCarteService);
    expect(service).toBeTruthy();
  });
});
