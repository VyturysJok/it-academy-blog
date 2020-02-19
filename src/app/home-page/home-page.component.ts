import {Component, OnInit} from "@angular/core";
import {Post} from "../shared/post";
import {PostService} from "../post.service";


@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.loadPosts().then(data => {
      this.posts = data.posts;
    });
  }

  handlePostReadMoreClick(post: Post) {
    console.log("Read more clicked: ", post);
  }

  handlePostCommentsClick(post: Post) {
    console.log("Comments clicked: ", post);
  }

  handlePostAuthorClick(post: Post) {
    console.log("Author clicked: ", post);
  }
}
