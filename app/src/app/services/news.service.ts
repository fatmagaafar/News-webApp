import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _HttpClient:HttpClient) { }

  getNews():Observable<any>
  {
    return this._HttpClient.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=99e1f1a52f144c48a332d88625205fc1");
  }


}
