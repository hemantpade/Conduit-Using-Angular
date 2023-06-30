import { Component } from '@angular/core';
import { ArticleDataService } from '../services/article-data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
    article:any;
    id:any
    formattedDate(date: string) {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }
    constructor(
     private actRoute: ActivatedRoute ,
     private articleData: ArticleDataService
      ) {}
      ngOnInit()
      {
      console.log('this.actRoute', this.actRoute)
      console.log('id', this.actRoute.snapshot.paramMap.get('id'))
       var id=this.actRoute.snapshot.paramMap.get('id')
      this.getDetailData(id)
      console.log('articles', this.article)
      }

  getDetailData(id:any){
    var params=`${id}`
    this.articleData.article(params).subscribe(
      (data:any) => {
        console.warn('data', data);
        this.article = data.article;
        this.id=data.article.author.username;
        console.log('this.id2', this.id)
        console.warn('articles',  this.article);
      },
      (error:any) => {
        console.error('Error fetching articles:', error);
        // Handle error if necessary
      }
    );
    console.log('this.articles',this.article)
  }
}
