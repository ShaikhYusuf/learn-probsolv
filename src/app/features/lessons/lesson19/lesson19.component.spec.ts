import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson19Component } from './lesson19.component';

describe('Lesson19Component', () => {
  let component: Lesson19Component;
  let fixture: ComponentFixture<Lesson19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson19Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
