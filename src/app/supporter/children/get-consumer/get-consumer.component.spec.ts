import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetConsumerComponent } from './get-consumer.component';

describe('GetConsumerComponent', () => {
  let component: GetConsumerComponent;
  let fixture: ComponentFixture<GetConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetConsumerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
