import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ModalComponent } from './components/modal/modal.component';
import { PersonalInfoModule } from '../onboarding/personal-info/personal-info.module';
import { AnimationDirective } from './directives/animation.directive';
import { ApplicationInfoModule } from '../onboarding/application-info/application-info.module';


@NgModule({
  declarations: [
    ModalComponent,
    AnimationDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    PersonalInfoModule,
    ApplicationInfoModule
  ],
  exports: [
    ModalComponent
  ]
})
export class SharedModule { }
