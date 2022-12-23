import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  // { 
  //   path: 'onboarding', 
  //   loadChildren: () => import('./onboarding/onboarding.module').then(m => m.OnboardingModule)
  // },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  { path: 'onboarding', loadChildren: () => import('./forms/onboarding/onboarding.module').then(m => m.OnboardingModule) } 
  // {
  //   path: 'documents',
  //   loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  // },
  // {
  //   path: 'application/details',
  //   loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
