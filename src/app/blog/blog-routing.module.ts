import { BlogComponent } from './blog.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: ':slug',
    component: BlogComponent
  },
  {
    path: '',
    loadChildren: () =>
      import('../home/home.module').then(m => m.HomeModule),
    pathMatch: "full"
  },
  {
    path: '**',
    loadChildren: () =>
      import('../not-found/not-found.module').then(m => m.NotFoundModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule { }

