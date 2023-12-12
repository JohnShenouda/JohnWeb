import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { URLsConfig } from '../URLsConfig';
import { UsersModel } from '../models/UsersModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient, public urlsconfig: URLsConfig) {
  }

  public getUser(userID : string) {
    let params = new HttpParams();
   
    params = params.append("userID", userID);
console.log(userID);
    const options = {
      params: params
    };
    return this.http.get<UsersModel>(this.urlsconfig.WebAPIURL + 'api/Users/GetUser', options);
  }
  public AddUser(user: UsersModel) {
    return this.http.post<UsersModel>(this.urlsconfig.WebAPIURL + 'api/Users/AddUser', user);
  }
  public AddUserPic(user: UsersModel) {
    return this.http.post<UsersModel>(this.urlsconfig.WebAPIURL + 'api/Users/AddUserImags', user);
  }


  public DelUser(userID: string) {

    let params = new HttpParams();

    params = params.append("UserID", userID);

    const options = {
      params: params
    };
    return this.http.delete<UsersModel>(this.urlsconfig.WebAPIURL + 'api/Users/DeleteUser', options);
  }
  public getUsersLookupTop() {

   // let params = new HttpParams();
    //params = params.append("CompCode", comCode);
    const options = {
      //params: params
    };

    return this.http.get<UsersModel[]>(this.urlsconfig.WebAPIURL + 'api/Users/UsersLookupTop', options);
  }

}
