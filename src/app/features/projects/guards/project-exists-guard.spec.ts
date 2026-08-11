import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { projectExistsGuard } from './project-exists-guard';

describe('projectExistsGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => projectExistsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
