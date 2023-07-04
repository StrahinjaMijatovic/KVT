import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/post';
import { CreatePost } from '../model/CreatePost';
import { reactionDTO } from '../model/reactionDTO';
import { UpdatePost } from '../model/UpdatePost';
import {HttpHeaders} from "@angular/common/http";
import {ApiService} from "src/app/api-service.service";
import {ConfigServiceService} from "./config-service.service";
import {ActivatedRoute, Router} from "@angular/router";

import {JwtHelperService} from "@auth0/angular-jwt";
import {UserService} from "src/app/service/user-service";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly path:string = "http://localhost:8080/api/posts";

  constructor(private http:HttpClient,public jwtHelper: JwtHelperService,
    private apiService: ApiService,
    private userService: UserService,
    private config: ConfigServiceService,
    private router: Router,
    private route: ActivatedRoute) { }

//   getAll():Observable<Post[]>{
//     return this.http.get<Post[]>(this.path + 'posts');
//   }

//   createPost(post:CreatePost):Observable<CreatePost>{
//     return this.http.post<CreatePost>(this.path + '/createPost', post);
//   }

create(post:CreatePost):Observable<CreatePost>{
    return this.http.post<CreatePost>(this.path + 'posts', post);
  }

    getAll() {
        return this.apiService.get(this.config._abs_allpost_url);
      }

//   deletePost(id:number): Observable<any>{
//     return this.http.delete(this.path+ `posts/${id}`, {responseType:'text'});
//   }

//   like(post:reactionDTO):Observable<reactionDTO>{
//     return this.http.post<reactionDTO>(this.path + `posts/${post.postID}/vote`, post);
//   }

//   dislike(post:reactionDTO):Observable<reactionDTO>{
//     return this.http.post<reactionDTO>(this.path + `posts/${post.postID}/vote`, post);
//   }

//   editPost(id:number, post: UpdatePost): Observable<any>{
//     return this.http.put(this.path + `posts/${id}`, post);
//   }

//   getOnePost(id: number): Observable<Post>{
//     return this.http.get<Post>(this.path + `posts/${id}`);
//   }
}
