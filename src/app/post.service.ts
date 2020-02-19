import { Injectable } from '@angular/core';
import {postList} from "./shared/post-list";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }
  loadPosts() {
    return postList
  }
  loadPostById(postId: string) {
    return postList.find(p=>p.id === postId)
  }
}
