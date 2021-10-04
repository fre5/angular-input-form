import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title: string = "Posts";
  subtitle: string = "Subtitle";
  posts: Post[] = [];
  
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(res => {
      res.forEach(r => r["votes"] = 1 );
      this.posts = res;
    });
  }

  onLike(post: Post) {
    post.votes += 1;
    return post;
  }

  onUnlike(post: Post) {
    post.votes -= 1;
    return post
  }

  onHide(post: Post): void {
    this.posts = this.posts.filter(showingPost => showingPost.id !== post.id);
  }

  addPost(post: Post): void {
    this.posts.unshift(post);
  }

}
