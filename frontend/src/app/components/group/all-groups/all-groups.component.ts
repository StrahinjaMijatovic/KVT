import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/model/group';
import { groupService } from 'src/app/service/group.service';

@Component({
  selector: 'app-all-groups',
  templateUrl: './all-groups.component.html',
  styleUrls: ['./all-groups.component.css']
})
export class AllGroupsComponent {

  groups: Group[] | undefined

  constructor(private groupService: groupService) { }

  ngOnInit(): void {
    this.groupService.getAll().subscribe(groups => {this.groups = groups});
  }

}
