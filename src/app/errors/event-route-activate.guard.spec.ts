import { TestBed, async, inject } from '@angular/core/testing';

import { EventRouteActivateGuard } from './event-route-activate.guard';

describe('EventRouteActivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventRouteActivateGuard]
    });
  });

  it('should ...', inject([EventRouteActivateGuard], (guard: EventRouteActivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
