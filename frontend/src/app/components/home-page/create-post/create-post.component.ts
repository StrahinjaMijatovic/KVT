import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "src/app/service/auth.service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {PostService} from "src/app/service/post.service";
import {UserService} from "src/app/service/user-service";
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  formPost = new FormGroup({
    post: new FormControl(''),
    groupList: new FormControl()
  });
  submitted = false;
  post!: Post;

  allFeedPosts:any;
  allGroups:any;
   allPosts:any;
  onSubmit() {
    /**
     * Innocent until proven guilty
     */

    this.submitted = true;
    console.warn('Your order has been submitted', this.formPost.value);
    this.postService.create(this.post).subscribe(() => this.router.navigateByUrl("/"));
    location.reload();
  }
  constructor(
    private authService: AuthServiceService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private postService : PostService

  ) {
    if(true)
    {

    }
    else {
      let returnUrl : String;
      returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      this.router.navigate([returnUrl]);
    }

  }
  
  ngOnInit() {

  }
}

