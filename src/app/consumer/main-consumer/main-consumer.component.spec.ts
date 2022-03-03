import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainConsumerComponent } from './main-consumer.component';

describe('MainConsumerComponent', () => {
  let component: MainConsumerComponent;
  let fixture: ComponentFixture<MainConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainConsumerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
