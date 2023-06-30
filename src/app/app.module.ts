import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './banner/banner.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FeedComponent } from './feed/feed.component';
import { TagsContainerComponent } from './tags-container/tags-container.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewmodalComponent } from './viewmodal/viewmodal.component';
import { LoaderComponent } from './loader/loader.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './settings/settings.component';
import { CreateEditArticleComponent } from './create-edit-article/create-edit-article.component';
import { AuthGuard } from './auth.guard';
import { MatIconModule } from '@angular/material/icon';
import { UploaderModule } from "angular-uploader";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    HomepageComponent,
    FeedComponent,
    TagsContainerComponent,
    LoginComponent,
    SignupComponent,
    ViewmodalComponent,
    LoaderComponent,
    DetailComponent,
    SettingsComponent,
    CreateEditArticleComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule , FormsModule,UploaderModule ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
