import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/entities/client.entity';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'pfa-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {
  
  clients!: Client [];

  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'dni',
    'birthDate',
    'phone',
    'homeAddress',
    'action',
  ];

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.clientService.getClients().subscribe((response) => {
      this.clients = response;
    });
    this.dataSource = new MatTableDataSource(this.clients);
  }

  deleteClient(index: number) {
    this.clientService.deleteClient(index);
    this.getClients();
    }
  

  currentIndexClient(index: number) {
  window.localStorage.removeItem("editClientId");
  window.localStorage.setItem("editClientId", index.toString());
  this.router.navigate(['/clients/edit-client']);
  }

}
