import { Component } from '@angular/core';
import { PostService } from "src/app/service/post.service";

@Component({
  selector: 'app-show-all-posts',
  templateUrl: './show-all-posts.component.html',
  styleUrls: ['./show-all-posts.component.css']
})
export class ShowAllPostsComponent {

  allPosts: any;

  constructor(private postService: PostService) {
    // Implementacija konstruktora
  }

  ngOnInit() {
    this.postService.getAll().subscribe((data) => {
      this.allPosts = data;
    });
  }

}