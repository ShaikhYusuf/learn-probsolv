import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson18Component } from './lesson18.component';

describe('Lesson18Component', () => {
  let component: Lesson18Component;
  let fixture: ComponentFixture<Lesson18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson18Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
