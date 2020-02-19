import { Component, OnInit } from '@angular/core';
import {postList} from "../shared/post-list";
import {ActivatedRoute} from "@angular/router";
import {Post} from "../shared/post";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: Post
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id')
    this.post = postList.find(p => p.id === postId)
  }

}
