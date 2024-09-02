import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AWSWorkshopsRoutingModule } from './aws-workshops-routing.module';
import { AWSWorkshopsComponent } from './aws-workshops.component';


@NgModule({
  declarations: [AWSWorkshopsComponent],
  imports: [
    CommonModule,
    AWSWorkshopsRoutingModule
  ]
})
export class AWSWorkshopsModule { }
