import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenConsumerSupportComponent } from './children-consumer-support.component';

describe('ChildrenConsumerSupportComponent', () => {
  let component: ChildrenConsumerSupportComponent;
  let fixture: ComponentFixture<ChildrenConsumerSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenConsumerSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenConsumerSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
