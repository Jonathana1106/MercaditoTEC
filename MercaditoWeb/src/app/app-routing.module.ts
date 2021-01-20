import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent} from 'src/app/Components/Authentication/sign-up/sign-up.component';
import { SignInComponent} from 'src/app/Components/Authentication/sign-in/sign-in.component';
import { HomeComponent } from 'src/app/Components/home/home.component';


const routes: Routes = [
  {path:'signUp', component:SignUpComponent},
  {path:'signIn', component:SignInComponent},
  {path:'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }