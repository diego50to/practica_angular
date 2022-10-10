import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/entities/client.entity';
import { ClientService } from '../../services/client.service';


@Component({
  selector: 'pfa-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {
  formClient!: FormGroup;
  client: Client[] = [];

  constructor(
    private clientService: ClientService,
    private FormBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.formClient = this.FormBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dni: ['', [Validators.required, Validators.min(1000000), Validators.max(9999999),]],
      birthDate: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      homeAddress: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 2000 });
  }

  submitAddClient() {
    const client: Client = {
      firstName: this.formClient.value.firstName,
      lastName: this.formClient.value.lastName,
      email: this.formClient.value.email,
      dni: this.formClient.value.dni,
      birthDate: this.formClient.value.birthDate,
      phone: this.formClient.value.phone,
      homeAddress: this.formClient.value.homeAddress,
    };
    this.clientService.addClient(client);
    console.log(client)
    this.router.navigate(['/clients/list-client']);
  }


  editClient() {
    const client: Client = {
      firstName: this.formClient.value.firstName,
      lastName: this.formClient.value.lastName,
      email: this.formClient.value.email,
      dni: this.formClient.value.dni,
      birthDate: this.formClient.value.birthDate,
      phone: this.formClient.value.phone,
      homeAddress: this.formClient.value.homeAddress,
    };
    this.clientService.addClient(client);
    console.log(client)
    this.router.navigate(['/clients/list-client']);
  }

  }



