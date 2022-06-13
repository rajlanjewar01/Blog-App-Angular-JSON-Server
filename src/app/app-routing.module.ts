import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisteredUserComponent } from './registered-user/registered-user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { PublishedPostComponent } from './published-post/published-post.component';


const routes: Routes = [
  { path: 'home', component: PublishedPostComponent },
  { path: '', redirectTo: 'home', pathMatch:'full' },
  { path: 'blog-setting', component: HomeComponent },
  { path: 'sign-in', component:SignInComponent },
  { path: 'sign-up', component:SignUpComponent },
  { path: 'registered-user', component:RegisteredUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
