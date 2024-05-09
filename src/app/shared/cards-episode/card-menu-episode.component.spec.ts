import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardeMenuComponent } from './card-menu-episode.component';

describe('CardMenuComponent', () => {
  let component: CardeMenuComponent;
  let fixture: ComponentFixture<CardeMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardeMenuComponent]
    });
    fixture = TestBed.createComponent(CardeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
