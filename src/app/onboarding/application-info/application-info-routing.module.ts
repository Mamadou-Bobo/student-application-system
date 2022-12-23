import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationInfoComponent } from './application-info.component';

const routes: Routes = [{ path: '', component: ApplicationInfoComponent }];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ApplicationInfoRoutingModule { }
