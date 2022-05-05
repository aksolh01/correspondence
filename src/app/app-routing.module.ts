import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CorrespondenceListComponent } from './pages/correspondence-list/correspondence-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'correspondenceListing', component: CorrespondenceListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
