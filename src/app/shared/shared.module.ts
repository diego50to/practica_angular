import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientFormComponent } from '../client/components/client-form/client-form.component';
import { ClientListComponent } from '../client/components/client-list/client-list.component';
import { ClientEditComponent } from '../client/components/client-edit/client-edit.component';
import { ClientComponent } from '../client/client.component';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { DniFormatterPipe } from './pipes/dni-formatter.pipe';
import { MatNativeDateModule} from '@angular/material/core';



const MATERIAL_MODULES = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatInputModule,
  MatTableModule,
  MatDatepickerModule,
  MatNativeDateModule
];

const SHARED_MODULES = [
  FormsModule,
  ReactiveFormsModule
];

const SHARED_COMPONENTS = [
  ClientFormComponent,
  ClientListComponent,
  ClientEditComponent,
  ClientComponent,
  DniFormatterPipe
];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS,
  ],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
    ...SHARED_MODULES
  ],
  exports: [
    ...SHARED_MODULES,
    ...MATERIAL_MODULES,
    ...SHARED_COMPONENTS
  ],
})


export class SharedModule { }
