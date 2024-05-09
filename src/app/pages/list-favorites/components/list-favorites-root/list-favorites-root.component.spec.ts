import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFavoritesRootComponent } from './list-favorites-root.component';

describe('ListFavoritesRootComponent', () => {
  let component: ListFavoritesRootComponent;
  let fixture: ComponentFixture<ListFavoritesRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFavoritesRootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListFavoritesRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
