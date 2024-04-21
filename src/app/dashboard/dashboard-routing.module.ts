import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleComponent } from './module/module.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
