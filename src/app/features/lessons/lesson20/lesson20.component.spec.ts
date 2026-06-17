import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson20Component } from './lesson20.component';

describe('Lesson20Component', () => {
  let component: Lesson20Component;
  let fixture: ComponentFixture<Lesson20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson20Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
