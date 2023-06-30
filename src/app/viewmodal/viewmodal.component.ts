import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleDataService } from '../services/article-data.service';
import { FollowService } from '../services/follow.service';
import { LoginService } from '../services/login.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-viewmodal',
  templateUrl: './viewmodal.component.html',
  styleUrls: ['./viewmodal.component.css']
})
export class ViewmodalComponent  implements OnInit{
  user = { username: '', following: false };
  userName:any[]=[]
  favBool:boolean=false
  profile:any
  favorite:any[]=[]
  username1:any
  email1:any

  formattedDate(date: string) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
  constructor(
    private actRoute: ActivatedRoute,
    private articleData: ArticleDataService,
    private followData: FollowService,

     ) {}

     ngOnInit()
     {
       this.username1=this.actRoute.snapshot.paramMap.get('id')
      // this.getAuthorData(username)
      this.getAuthorData(this.username1)
      this.getProfileData(this.username1)

      console.log('this.actRoute', this.actRoute)
     }

     clickFavorite =()=>{
      this.getFavoriteData(this.username1)
        this.favBool=true
     }
     clickGlobal(){
      this.favBool=false
      this.getAuthorData(this.username1)
     }

     followUser(): void {
      const username =this.username1
      // const email=this.loginData.email
      this.followData.followUser(username)
        .subscribe(
          result => {
            console.log(result); // Handle the result here
          },
          error => {
            console.log('error', error); // Handle the error here
          }
        );
    }
     getFavoriteData(username1:any){
      var params=`?favorited=${username1}`
      this.articleData.article(params).subscribe(
        (data:any) => {
          console.warn('data', data);
          this.userName = data.articles;
          console.warn('favorite',  this.favorite);
        },
        (error:any) => {
          console.error('Error fetching articles:', error);
          // Handle error if necessary
        }
      );
     }

     getAuthorData(username1:any){
         var params=`?author=${username1}`
         this.articleData.article(params).subscribe(
          (data:any) => {
            console.warn('data', data);
            this.userName = data.articles;
            console.warn('articles',  this.userName);
          },
          (error:any) => {
            console.error('Error fetching articles:', error);
            // Handle error if necessary
          }
        );
     }
     getProfileData(username:any){
          var params=`${username}`
          this.articleData.profile(params).subscribe(
            (data:any) => {
              console.warn('data', data);
              this.profile = data.profile;
              console.warn('profile',  this.profile);
            },
            (error:any) => {
              console.error('Error fetching articles:', error);
              // Handle error if necessary
            }
          );
     }

}