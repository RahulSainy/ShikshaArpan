import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplySelectedComponent } from './apply-selected.component';

describe('ApplySelectedComponent', () => {
  let component: ApplySelectedComponent;
  let fixture: ComponentFixture<ApplySelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplySelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplySelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
