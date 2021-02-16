import { TestBed } from '@angular/core/testing';

import { SampleResolver } from './sample.resolver';

describe('SampleResolver', () => {
  let resolver: SampleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SampleResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
