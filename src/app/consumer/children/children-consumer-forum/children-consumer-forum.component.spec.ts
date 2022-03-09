import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenConsumerForumComponent } from './children-consumer-forum.component';

describe('ChildrenConsumerForumComponent', () => {
  let component: ChildrenConsumerForumComponent;
  let fixture: ComponentFixture<ChildrenConsumerForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenConsumerForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenConsumerForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
