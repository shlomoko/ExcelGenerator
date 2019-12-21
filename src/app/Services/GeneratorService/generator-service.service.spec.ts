import { TestBed } from '@angular/core/testing';

import { GeneratorService } from './generator-service.service';

describe('GeneratorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneratorService = TestBed.get(GeneratorService);
    expect(service).toBeTruthy();
  });
});
