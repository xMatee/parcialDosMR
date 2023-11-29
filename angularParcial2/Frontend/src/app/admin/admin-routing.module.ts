import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../pages/main/main.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { TestsEditarComponent } from './adminTests/components/tests-editar/tests-editar.component';
import { TestsAdminComponent } from './adminTests/components/tests-admin/tests-admin.component';
import { TestsFormComponent } from './adminTests/components/tests-form/tests-form.component';

const routes: Routes = [{
  path: "",
  component: MainComponent,
  children: [
    {
      path: "",
      component: AdminComponentComponent
    },
    {
      path: "tests",
      component: TestsAdminComponent
    },
    {
      path: "tests/new",
      component: TestsFormComponent
    },
    {
      path: "tests/editar/:id",
      component: TestsEditarComponent
    },


  ]
},];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
