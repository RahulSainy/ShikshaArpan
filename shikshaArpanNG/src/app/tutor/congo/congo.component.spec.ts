import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongoComponent } from './congo.component';

describe('CongoComponent', () => {
  let component: CongoComponent;
  let fixture: ComponentFixture<CongoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
