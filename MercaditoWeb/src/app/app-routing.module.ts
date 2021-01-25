import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent} from 'src/app/Components/Authentication/sign-up/sign-up.component';
import { SignInComponent} from 'src/app/Components/Authentication/sign-in/sign-in.component';
import { HomeComponent } from 'src/app/Components/home/home.component';
import { OfertasComponent } from './Components/OfertasLaborales/ofertas.component';
import { OfertaComponent } from './Components/Oferta/oferta.component';
import { DashboardComponent } from './Components/Dashboard/dashboard.component';
import { StudentPComponent } from 'src/app/Components/StudentComponents/profile/student-p/student-p.component';
import { AdminPComponent } from './Components/AdminComponents/profile/admin-p/admin-p.component';
import { EmployerPComponent } from './Components/EmployerComponents/profile/employer-p/employer-p.component';


const routes: Routes = [
  {path:'signUp', component:SignUpComponent},
  {path:'signIn', component:SignInComponent},
  { path: 'ofertas', component: OfertasComponent },
  { path: 'oferta', component: OfertaComponent },
  {path:'dashboard', component: DashboardComponent}
  {path:'home', component:HomeComponent},
  {path:'sProfile', component:StudentPComponent},
  {path:'aProfile', component:AdminPComponent},
  {path:'eProfile', component:EmployerPComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
