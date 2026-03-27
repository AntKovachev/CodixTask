import { Client } from '../models/client.model';

export interface ClientFieldConfig {
  key: keyof Client;
  label: string;
  type: 'text' | 'email' | 'tel';
  readonly: boolean;
}

export const CLIENT_FIELD_CONFIG: ClientFieldConfig[] = [
  { key: 'name',          label: 'First Name',      type: 'text',  readonly: false },
  { key: 'secondName',    label: 'Last Name',        type: 'text',  readonly: false },
  { key: 'email',         label: 'Email',            type: 'email', readonly: false },
  { key: 'phone',         label: 'Phone',            type: 'tel',   readonly: false },
  { key: 'address',       label: 'Address',          type: 'text',  readonly: false },
  { key: 'city',          label: 'City',             type: 'text',  readonly: false },
  { key: 'country',       label: 'Country',          type: 'text',  readonly: false },
  { key: 'accountNumber', label: 'Account Number',   type: 'text',  readonly: true  },
  { key: 'bankCard',      label: 'Bank Card',        type: 'text',  readonly: true  },
];
