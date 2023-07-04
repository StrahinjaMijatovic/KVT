import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../model/group';
import { CreateGroup } from '../model/CreateGroup';
import {ApiService} from 'src/app/api-service.service';
import {ConfigServiceService} from 'src/app/service/config-service.service';

@Injectable({
  providedIn: 'root'
})
export class groupService {

  private readonly path:string = "http://localhost:8080/api/groups";

  constructor( private apiService: ApiService,
    private config: ConfigServiceService, private http: HttpClient) { }

  // getAll():Observable<Group[]>{
  //   return this.http.get<Group[]>(this.path);
  // }

  createGroup(group: CreateGroup): Observable<Group> {
    const token = localStorage.getItem('jwt'); // Assuming you store the JWT token in local storage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<Group>(this.path + '/createGroup', group, { headers });
  }
  // createGroup(group: CreateGroup){
  //   return this.apiService.post(this.path + "/createGroup", JSON.stringify(group))
  // }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.path + "/all");
  }


}
