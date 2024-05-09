import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEpisodesRootComponent } from './list-episodes-root.component';

describe('ListEpisodesRootComponent', () => {
  let component: ListEpisodesRootComponent;
  let fixture: ComponentFixture<ListEpisodesRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEpisodesRootComponent]
    });
    fixture = TestBed.createComponent(ListEpisodesRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
