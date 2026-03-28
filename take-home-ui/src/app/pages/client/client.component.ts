import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';
import { CLIENT_FIELD_CONFIG, ClientFieldConfig } from '../../config/config';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  client: Client | null = null;
  fields: ClientFieldConfig[] = CLIENT_FIELD_CONFIG;
  isReady = false;
  error = '';

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getClient().subscribe({
      next: (data) => {
        this.client = data;
        this.isReady = true;
      },
      error: () => {
        this.error = 'Failed to load client data. Please try again.';
      }
    });
  }
}
