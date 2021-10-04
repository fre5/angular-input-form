import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
/*    return [
      {
        id: 1,
        title: 'My first post',
        body: 'Testing',
        votes: 1
      },
      {
        id: 2,
        title: 'My first post 2',
        body: 'Testing 2',
        votes: 3
      },
      {
        id: 3,
        title: 'My first post 3',
        body: 'Testing 3',
        votes: 5
      },
      {
        id: 4,
        title: 'My first post 4',
        body: 'Testing 4',
        votes: 2
      },
      {
        id: 5,
        title: 'My first post 5',
        body: 'Testing 5',
        votes: 9
      }
    ] */
    return this.http.get<Post[]>("http://jsonplaceholder.typicode.com/posts?_limit=8");
  }
}
