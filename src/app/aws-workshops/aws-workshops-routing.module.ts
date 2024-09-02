import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AWSWorkshopsComponent } from './aws-workshops.component';

const routes: Routes = [{ path: '', component: AWSWorkshopsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AWSWorkshopsRoutingModule { }
