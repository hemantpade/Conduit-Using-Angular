import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TagdataService {
  url = 'https://api.realworld.io/api/tags'

  constructor(private http: HttpClient) {}
  tag():Observable<{tags:any[];}> {
    return this.http.get(this.url) as Observable<{ tags:any[] }>;
  }

}
