import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { TestsAdminComponent } from './adminTests/components/tests-admin/tests-admin.component';
import { TestsFormComponent } from './adminTests/components/tests-form/tests-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestsEditarComponent } from './adminTests/components/tests-editar/tests-editar.component';


@NgModule({
  declarations: [
    AdminComponentComponent,
    TestsAdminComponent,
    TestsEditarComponent,
    TestsFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
