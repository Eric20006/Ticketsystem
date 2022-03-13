import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenSupporterChatComponent } from './children-supporter-chat.component';

describe('ChildrenSupporterChatComponent', () => {
  let component: ChildrenSupporterChatComponent;
  let fixture: ComponentFixture<ChildrenSupporterChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrenSupporterChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenSupporterChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
