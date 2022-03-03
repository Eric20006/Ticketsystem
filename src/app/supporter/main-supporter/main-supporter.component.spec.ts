import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSupporterComponent } from './main-supporter.component';

describe('MainSupporterComponent', () => {
  let component: MainSupporterComponent;
  let fixture: ComponentFixture<MainSupporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSupporterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSupporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
