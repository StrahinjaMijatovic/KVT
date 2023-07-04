import { Component } from '@angular/core';
import {AuthServiceService} from "src/app/service/auth.service.service";
import {ActivatedRoute, Router} from "@angular/router";
import { FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // if(this.authService.isAuthenticated())
    // {

    // }
    // else {
    //   let returnUrl : String;
    //   returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //   this.router.navigate([returnUrl]);
    // }
  }


  forma = new FormGroup({
    NewPassword: new FormControl(''),
    oldPassword1: new FormControl(''),
    oldPassword2: new FormControl(''),

  });

  submitted = false;

  private returnUrl: any;
  public a: any;
  
  onSubmit() {

    this.submitted = true;
    alert("Sifra je uspesno promenjena")
    this.authService.changePassword(this.forma.value)
  }

}
