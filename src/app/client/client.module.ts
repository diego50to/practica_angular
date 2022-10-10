import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ClientRoutingModule } from './client-routing.module';



@NgModule({
  declarations: [
  
  ],
  imports: [
    SharedModule,
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
