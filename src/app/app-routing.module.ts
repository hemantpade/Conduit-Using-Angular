import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { DetailComponent } from './detail/detail.component';
import { ViewmodalComponent } from './viewmodal/viewmodal.component';
import { SettingsComponent } from './settings/settings.component';
import { CreateEditArticleComponent } from './create-edit-article/create-edit-article.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'',component: HomepageComponent},
  {path:'homepage',component: HomepageComponent ,canActivate:[AuthGuard]},
  {path:'login',component: LoginComponent},
  {path:'signup',component: SignupComponent},
  {path:'articles/:id',component:DetailComponent},
  // {path:'#/:username',component: ViewmodalComponent},
  {path:'authors/:id',component: ViewmodalComponent},
  {path:'settings',component: SettingsComponent},
  {path:'create-edit-article',component: CreateEditArticleComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
