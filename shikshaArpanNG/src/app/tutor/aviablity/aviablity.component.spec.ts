import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviablityComponent } from './aviablity.component';

describe('AviablityComponent', () => {
  let component: AviablityComponent;
  let fixture: ComponentFixture<AviablityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AviablityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AviablityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
