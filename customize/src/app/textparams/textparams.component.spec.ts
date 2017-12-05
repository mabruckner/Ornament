import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextparamsComponent } from './textparams.component';

describe('TextparamsComponent', () => {
  let component: TextparamsComponent;
  let fixture: ComponentFixture<TextparamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextparamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextparamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
