import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private apiUrl = 'https://api.realworld.io/api/articles';

  constructor(private http: HttpClient) { }

  favoriteArticle(token: string): Observable<any> {
    const url = `${this.apiUrl}/favorite`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Authorization': `Token ${token}`
    });
    return this.http.post(url, null, { headers });
  }
}
