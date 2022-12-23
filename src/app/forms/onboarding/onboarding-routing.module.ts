import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from './onboarding.component';

const routes: Routes = [
  { 
    path: '', 
    component: OnboardingComponent,
    children: [
      {
        path: 'personal',
        loadChildren: () =>
          import('./personal-info/personal-info.module').then(m => m.PersonalInfoModule)
      }
    ]
  }
];
  // { path: 'personal-info', loadChildren: () => import('./personal-info/personal-info.module').then(m => m.PersonalInfoModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
