import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
    { path: 'tags/:keyword', loadChildren: () => import('./tags/tags.module').then((m) => m.TagsModule) },
    { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
    { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
    { path: 'aws-workshops', loadChildren: () => import('./aws-workshops/aws-workshops.module').then(m => m.AWSWorkshopsModule) },
    { path: '404', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) }, 
    { path: '**', pathMatch: 'full', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) }, 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
