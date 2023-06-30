import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditArticleComponent } from './create-edit-article.component';

describe('CreateEditArticleComponent', () => {
  let component: CreateEditArticleComponent;
  let fixture: ComponentFixture<CreateEditArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEditArticleComponent]
    });
    fixture = TestBed.createComponent(CreateEditArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
