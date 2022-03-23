import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskQuesComponent } from './ask-ques.component';

describe('AskQuesComponent', () => {
  let component: AskQuesComponent;
  let fixture: ComponentFixture<AskQuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskQuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
