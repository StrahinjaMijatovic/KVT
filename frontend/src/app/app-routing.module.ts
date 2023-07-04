import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { CreateGroupComponent } from './components/home-page/create-group/create-group.component';
import { CreatePostComponent } from './components/home-page/create-post/create-post.component';
import { AllPostsComponent } from './components/home-page/all-posts/all-posts.component';

const routes: Routes = [
  { path: 'login', component: FormComponent },
  { path: 'registration', component: FormComponent },
  { path: 'changePassword', component: ChangePasswordComponent },
  { path: 'createGroup', component: CreateGroupComponent },
  { path: 'allPosts', component: AllPostsComponent },
  { path: 'createPost', component: CreatePostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
