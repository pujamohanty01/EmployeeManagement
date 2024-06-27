import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './login/login.component';
import { SignupComponent } from './sign-up/sign-up.component';
import { authGuard } from './shared/guard/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';

const routes: Routes = [ 
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(x=> x.AdminModule),canActivate: [authGuard]},
  {path: 'login', component: LogInComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  {path:'', redirectTo: 'login', pathMatch :'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
