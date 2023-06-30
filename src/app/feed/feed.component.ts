import { Component } from '@angular/core';
import { ArticleDataService } from '../services/article-data.service';
import { TagdataService } from '../services/tagdata.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent {
  isActive: boolean = false;
  date: Date = new Date();
  hashtag: String = '#';
  hashtage: String = '';
  tag: any = '';
  page = 1;

  formattedDate(date: string) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  listConfig: any = {
    type: 'feed',
  };
  changeList(param: any){
    console.log(param);
  }

  onPagination(event: any) {
    console.log('event', event);
    const offset = this.offset + 10 * event;
    const limit = this.limit - this.offset; // Calculate the offset based on the current page
    //  console.log('offset', offset)
    this.getfeed(limit, offset, this.tag);
  }
  articles: any[] = [];
  limit = 10;
  offset = 0;
  value: string = 'implementations';
  count:any

  tags: any[] = [];

  constructor(
    private articleData: ArticleDataService,
    private tagsData: TagdataService
  ) {}

  ngOnInit() {
    this.getfeed(this.limit, this.offset, this.tag);
    //for tags in popular tags
    this.tagsData.tag().subscribe((data) => {
      console.warn('data tags', data);
      this.tags = data.tags;
    });
  }
  getValue(event: any) {
    console.log(event?.target.value);
    this.tag = event?.target.value;
    this.isActive = true;
    this.hashtage = this.hashtag + event?.target.value;
    console.log('event?.target.value', this.tag);
    this.getfeed(this.limit, this.offset, this.tag);
  }
  getfeed(limit: any, offset: any, tag: String) {
    console.log('tag', tag);

    var params = `?limit=${limit}&offset=${offset}`;

    if (tag !== null && tag !== undefined && tag !== '') {
      params += `&tag=${tag}`;
    }
    console.log('params', params);
    this.articleData.article(params).subscribe(
      (data: any) => {
        console.warn('data', data);
        this.articles = data.articles;
        this.count=data.articlesCount
      },
      (error: any) => {
        console.error('Error fetching articles:', error);
        // Handle error if necessary
      }
    );
  }
}
