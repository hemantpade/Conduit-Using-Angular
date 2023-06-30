import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FeedComponent} from "../feed/feed.component"
@Injectable({
  providedIn: 'root',
})
export class ArticleDataService {
  url = 'https://api.realworld.io/api/articles/';
  url1='https://api.realworld.io/api/profiles/'
  url2='https://api.realworld.io/api/articles/feed/'
  constructor(private http: HttpClient) {}
  article(params:any):any {
    return this.http.get(this.url+params) as Observable<any>;
  }
  profile(params:any):any {
    return this.http.get(this.url1+params) as Observable<any>;
  }
  feed(params:any):any{
    return this.http.get(this.url+params) as Observable<any>;
  }
}
