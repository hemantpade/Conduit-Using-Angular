import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FollowService {
  constructor(private http: HttpClient) {}
  following:any
  followUser(username: string): Observable<any> {
    const url = `https://api.realworld.io/api/profiles/${username}/follow`;

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('X-Requested-With', 'XMLHttpRequest')
      .set('Authorization', 'Token {{token}}');

    const body = JSON.stringify({
      user: {
        // email:email,
        email:'hemantpade07@gmail.com',
        username:username,
        following:this.following
      }
    });
    const method = this.following ? 'delete' : 'post';
    return this.http.post(url, body,{headers} );
  }
}
