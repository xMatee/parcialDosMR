import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MenuComponent } from 'src/app/share/menu/menu.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
