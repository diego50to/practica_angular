import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Client } from 'src/app/core/entities/client.entity';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor() {}

  public clients: Client[] = [
    {
      firstName: 'Juan',
      lastName: 'Perez',
      email: 'juanperez@yahoo.com.ar',
      dni: 35563986,
      birthDate: new Date(),
      phone: 3834520663,
      homeAddress: 'Barrio Las Lomas',
    },
    {
      firstName: 'Jose',
      lastName: 'Gomez',
      email: 'josegomez@yahoo.com.ar',
      dni: 25896366,
      birthDate: new Date(),
      phone: 3834896325,
      homeAddress: 'Barrio Centro',
    },
  ];

  getClients(): Observable<Client[]> {
    return of(this.clients);
  }

  addClient(newClient: Client) {
    this.clients.push(newClient);
  }

  deleteClient(index: number) {
    this.clients.splice(index, 1);
  }

}
