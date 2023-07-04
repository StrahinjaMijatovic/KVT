import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {
 
  _api_url: string;
  _user_url: string;
   _users_url: string;
   _signup_url: string;
  _passchange_url: string;
  _groupcreate_url: string;
  _saveuser_url: string;
  _postcreate_url: string;
  _postAll_url: string;
  _deletepost_url: string;
  _postone_url: string;
  _postsave_url: string;
  _postsavetogroup_url: string;
  _reactioncreate_url: string;
  _reactionsave_url: string;
  _groupone_url: string;
  _abs_allpost_url: string;
  _groupall_url: string;
  _groupsave_url: string;
  _groupdelete_url: string;
  _myProfile_url: string;
  constructor() {
    this._api_url = 'http://localhost:8080/api';
    this._user_url = this._api_url + '/users';
    this._passchange_url = this._user_url + "/changePassword";
    this._groupcreate_url = this._api_url + "/group/create"
    this._myProfile_url = this._user_url + "/getCurrentUser";
    this._users_url = this._user_url + '/all';
    this._postcreate_url = this._api_url + "/post/createPost";
    this._saveuser_url = this._user_url + "/saveCurrentUser";
    this._reactioncreate_url = this._api_url + "/reaction/create";
    this._postsavetogroup_url = this._api_url + "/post/createInGroup"
    this._signup_url = this._user_url + '/signup';
    this._abs_allpost_url =  this._api_url + "/post/getAll";
    this._postAll_url = this._api_url + "/post/All";
    this._deletepost_url= this._api_url + "/post/delete";
    this._postone_url = this._api_url + "/post/one";
    this._postsave_url = this._api_url + "/post/save";
    this._groupone_url= this._api_url + "/group/one";
    this._groupall_url= this._api_url + "/group/getAll";
    this. _groupsave_url= this._api_url + "/group/save";
    this.  _groupdelete_url =this._api_url + "/group/delete";
    this._reactionsave_url = this._api_url + "/reaction/save";
  }
}
