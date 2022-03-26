import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationStatusComponent } from './information-status.component';

describe('InformationStatusComponent', () => {
  let component: InformationStatusComponent;
  let fixture: ComponentFixture<InformationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
