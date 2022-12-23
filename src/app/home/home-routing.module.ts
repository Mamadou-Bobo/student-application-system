import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from '../forms/onboarding/onboarding.component';
import { ApplicationDetailsComponent } from './pages/application-details/application-details/application-details.component';
import { ApplicationComponent } from './pages/application/application.component';
import { DocumentsComponent } from './pages/documents/documents/documents.component';

export const routes: Routes = [
  { 
    path: 'application', 
    component: OnboardingComponent,
    // children: [
    //   {
    //     path: 'personal-info',
    //     loadChildren: () => import('../forms/personal-info/personal-info/personal-info.module').then(m => m.PersonalInfoModule)
    //   }
    // ]
  },
  { path: 'documents', component: DocumentsComponent },
  { path: 'application-details', component: ApplicationDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
