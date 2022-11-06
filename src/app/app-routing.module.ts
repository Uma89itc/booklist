import { NgModule } from '@angular/core';
import { BooklistComponent } from './booklist/booklist.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('src/app/booklist/booklist.module').then(m => m.BooklistModule)},
  { path: 'booklist', loadChildren: () => import('src/app/booklist/booklist.module').then(m => m.BooklistModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
