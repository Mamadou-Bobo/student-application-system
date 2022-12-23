import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SideBarModule } from '../layouts/side-bar/side-bar/side-bar.module';
import { HeaderModule } from '../layouts/header/header/header.module';
import { HomeComponent } from './home/home.component';
import { DocumentsComponent } from './pages/documents/documents/documents.component';
import { ApplicationDetailsComponent } from './pages/application-details/application-details/application-details.component';
import { ApplicationComponent } from './pages/application/application.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnboardingModule } from '../onboarding/onboarding.module';
import { PersonalInfoModule } from '../onboarding/personal-info/personal-info.module';


@NgModule({
  declarations: [
    HomeComponent,
    DocumentsComponent,
    ApplicationDetailsComponent,
    ApplicationComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SideBarModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
