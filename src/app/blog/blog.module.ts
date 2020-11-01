import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { UtterancesDirective } from './utterances.directive';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

@NgModule({
  declarations: [BlogComponent, UtterancesDirective],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ScullyLibModule,
  ],
})
export class BlogModule { }
