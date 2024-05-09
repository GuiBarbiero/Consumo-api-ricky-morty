import { TestBed } from '@angular/core/testing';

import { ListCharactersService } from './list-characters.service';

describe('ListCharactersService', () => {
  let service: ListCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
