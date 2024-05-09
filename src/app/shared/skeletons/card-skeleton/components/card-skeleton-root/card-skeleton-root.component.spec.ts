import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSkeletonRootComponent } from './card-skeleton-root.component';

describe('CardSkeletonRootComponent', () => {
  let component: CardSkeletonRootComponent;
  let fixture: ComponentFixture<CardSkeletonRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSkeletonRootComponent]
    });
    fixture = TestBed.createComponent(CardSkeletonRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
