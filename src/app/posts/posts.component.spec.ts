import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct title', () => {
    expect(component.title).toBe("Posts");
  });

  it('should upvote correctly', () => {
    expect(component.onLike({
      id:10,
      title:'sample title',
      body:'sample body',
      votes:1
    })).toEqual({
      id:10,
      title:'sample title',
      body:'sample body',
      votes:2
    });
  });
});
