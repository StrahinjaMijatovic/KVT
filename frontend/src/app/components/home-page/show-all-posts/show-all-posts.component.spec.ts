import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllPostsComponent } from './show-all-posts.component';

describe('ShowAllPostsComponent', () => {
  let component: ShowAllPostsComponent;
  let fixture: ComponentFixture<ShowAllPostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAllPostsComponent]
    });
    fixture = TestBed.createComponent(ShowAllPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
