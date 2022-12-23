import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from '../forbidden/forbidden.component';
import { role } from '../shared/utils/RoleConstant';
import { AuthGuard } from './auth-handler/AuthGuard';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  // {
  //   path: 'application',
  //   component: OnboardingComponent,
  //   canActivate: [AuthGuard],
  //   data: {
  //     roles: [
  //       role.APPLICANT
  //     ]
  //   }
  // },
  {path: 'forbidden', component: ForbiddenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
