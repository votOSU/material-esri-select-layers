import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteSelectLayersComponent } from './route-select-layers/route-select-layers.component';


const routes: Routes = [
  { path: 'select-layers', component: RouteSelectLayersComponent },
  { path: '', redirectTo: '/select-layers', pathMatch: 'full' },
  { path: '**', redirectTo: '/select-layers' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
