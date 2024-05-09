import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCharectersRootComponent } from './list-charecters-root.component';

describe('ListCharectersRootComponent', () => {
  let component: ListCharectersRootComponent;
  let fixture: ComponentFixture<ListCharectersRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCharectersRootComponent]
    });
    fixture = TestBed.createComponent(ListCharectersRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
