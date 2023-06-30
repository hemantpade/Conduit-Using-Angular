import { Component,OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create-edit-article',
  templateUrl: './create-edit-article.component.html',
  styleUrls: ['./create-edit-article.component.css']
})

export class CreateEditArticleComponent {
  constructor(private http: HttpClient) {}

  token: string | null = localStorage.getItem('token');

  convertToken() {
    if (this.token != null) {
      this.token = this.token.replace(/"/g, '');
      console.log('this.token', this.token)
    }
  }
  ngOnInit() {
   this. convertToken()
   console.log('this.token on ng', this.token)
  }
  createArticle() {
    const url = 'https://api.realworld.io/api/articles';
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('X-Requested-With', 'XMLHttpRequest')
      .set('Authorization', `Token ${this.token}`);

    // Get the values entered in the HTML input fields
    const articleTitle = (<HTMLInputElement>document.getElementById('articleTitle')).value;
    const articleDescription = (<HTMLInputElement>document.getElementById('articleDescription')).value;
    const articleBody = (<HTMLInputElement>document.getElementById('articleBody')).value;
    const articleTags = (<HTMLInputElement>document.getElementById('articleTags')).value.split(',');

    const body = {
      article: {
        title: articleTitle,
        description: articleDescription,
        body: articleBody,
        tagList: articleTags
      }
    };

    this.http.post(url, body, { headers })
      .subscribe(
        result => console.log(result),
        error => console.log('error', error)
      );
  }
}
