import { TestBed } from '@angular/core/testing';

import { groupService } from './group.service';

describe('GroupService', () => {
  let service: groupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(groupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});