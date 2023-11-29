import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsEditarComponent } from './tests-editar.component';

describe('TestsEditarComponent', () => {
  let component: TestsEditarComponent;
  let fixture: ComponentFixture<TestsEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestsEditarComponent]
    });
    fixture = TestBed.createComponent(TestsEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
