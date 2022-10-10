import { Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Client } from 'src/app/core/entities/client.entity';
import { ClientService } from '../../services/client.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first } from 'rxjs';

@Component({
  selector: 'pfa-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss'],
})
export class ClientEditComponent implements OnInit {
  client!: Client[];
  formEditClient!: FormGroup;
  clientId!: any

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private clientService: ClientService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.clientId  = window.localStorage.getItem('editClientId');

    if (!this.clientId) {
      alert('Invalid action.');
      this.router.navigate(['/clients/list-client']);
      return;
    }
    this.formEditClient = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dni: [
        '',
        [Validators.required, Validators.min(1000000), Validators.max(99999999)],
      ],
      birthDate: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      homeAddress: ['', [Validators.required]],
    });

    this.clientService.getClientById(+this.clientId).subscribe((response) => {
      this.formEditClient.setValue(response);
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 2000 });
  }

  submitEditClient() {
    this.clientService.editClient(this.formEditClient.value, this.clientId);
    this.router.navigate(['/clients/list-client']);
  }
}

