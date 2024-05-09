import { TestBed } from '@angular/core/testing';

import { ListEpisodesService } from './list-episodes.service';

describe('ListCharactersService', () => {
  let service: ListEpisodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListEpisodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
