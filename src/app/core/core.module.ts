import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientModule } from '../client/client.module';

const APP_MODULES = [
  ClientModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...APP_MODULES
  ],
  exports: [
    ...APP_MODULES
  ]
})
export class CoreModule { }
