import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  constructor(public router: Router, private route: ActivatedRoute,
    private auth: AuthService) { }

  ngOnInit(): void {
  }

  createPostClick(){
    console.log(this.auth.getUsername(), this.auth.getRoles())
    this.route.paramMap.subscribe((params: ParamMap) => { let id = params.get('id') || ""; this.router.navigateByUrl(`/createPost`)});
  }

  createGroupClick(){
    this.router.navigateByUrl("/createGroup")
  }

  loggedIn(): Boolean{
    return this.auth.tokenIsPresent();
  }

}
