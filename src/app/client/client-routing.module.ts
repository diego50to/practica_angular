import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientListComponent } from './components/client-list/client-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-client',
        component: ClientListComponent,
      },

      { 
        path: 'form-client',
      component: ClientFormComponent
      },

      {
        path: 'edit-client',
        component: ClientEditComponent,
      },

    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
