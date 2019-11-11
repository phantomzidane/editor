import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftEditorComponent } from './left-editor.component';

describe('LeftEditorComponent', () => {
  let component: LeftEditorComponent;
  let fixture: ComponentFixture<LeftEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
