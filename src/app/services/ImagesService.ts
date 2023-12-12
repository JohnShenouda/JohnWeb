import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { URLsConfig } from '../URLsConfig';
import { ImagesModel } from '../models/ImagesModel';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  constructor(private http: HttpClient, public urlsconfig: URLsConfig) {
  }

  public getImage(userID : string) {
    let params = new HttpParams();
    params = params.append("userID", userID);
    const options = {
      params: params
    };
    return this.http.get<ImagesModel>(this.urlsconfig.WebAPIURL + 'api/Users/GetImage', options);
  }
}
