import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateGroup } from 'src/app/model/CreateGroup';
import { groupService } from 'src/app/service/group.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit{

  group!: CreateGroup;
  createGroup!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private groupService: groupService) { 
      this.createForm()
    }

  ngOnInit(): void {
  }


  createForm(){
    this.createGroup = this.fb.group({
      'name' : new FormControl(null, [Validators.required]),
      'description' : new FormControl(null, [Validators.required])
    });
  }

  // onSubmit(){
  //   this.group = new CreateGroup(this.createGroup.value);
  //   this.groupService.createGroup(this.group).subscribe(() => this.router.navigateByUrl("/"))
  // }
  submitted = false;
  onSubmit() {

    this.submitted = true;
    alert("Grupa je uspesno napravljena")
    this.groupService.createGroup(this.createGroup.value).subscribe(() => this.router.navigateByUrl("/"));
  }


}
