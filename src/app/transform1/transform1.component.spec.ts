import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Transform1Component } from './transform1.component';

describe('Transform1Component', () => {
  let component: Transform1Component;
  let fixture: ComponentFixture<Transform1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Transform1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Transform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
