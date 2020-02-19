import {Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Post} from "./shared/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[];

  constructor(private httpClient: HttpClient) {
  }

  loadPosts() {
    return this.httpClient.get<{ posts: Post[] }>('assets/post-list.json').toPromise()
      .then(data => {
        this.posts = data.posts;
        return data;
      });
  }

  loadPostById(postId: string) {
    return this.posts.find(p => p.id === postId);
  }
}
