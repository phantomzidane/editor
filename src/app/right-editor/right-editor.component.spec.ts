import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightEditorComponent } from './right-editor.component';

describe('RightEditorComponent', () => {
  let component: RightEditorComponent;
  let fixture: ComponentFixture<RightEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
