import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmodalComponent } from './viewmodal.component';

describe('ViewmodalComponent', () => {
  let component: ViewmodalComponent;
  let fixture: ComponentFixture<ViewmodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewmodalComponent]
    });
    fixture = TestBed.createComponent(ViewmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
