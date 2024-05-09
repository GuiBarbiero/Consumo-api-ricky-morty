import { TestBed } from '@angular/core/testing';

import { ManageCharactersService } from './manage-characters.service';

describe('ManageCharactersService', () => {
  let service: ManageCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
