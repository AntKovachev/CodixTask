import { Client } from '../models/client.model';

export interface ClientFieldConfig {
  key: keyof Client;
  label: string;
  type: 'text' | 'email' | 'tel';
  readonly: boolean;
  required?: boolean;
  minLength?: number;
}

export const CLIENT_FIELD_CONFIG: ClientFieldConfig[] = [
  { key: 'name',          label: 'First Name',     type: 'text',  readonly: false, required: true },
  { key: 'secondName',    label: 'Last Name',      type: 'text',  readonly: false, required: true },
  { key: 'email',         label: 'Email',          type: 'email', readonly: false, required: true },
  { key: 'phone',         label: 'Phone',          type: 'tel',   readonly: false, required: true, minLength: 7 },
  { key: 'address',       label: 'Address',        type: 'text',  readonly: false, required: true },
  { key: 'city',          label: 'City',           type: 'text',  readonly: false, required: true },
  { key: 'country',       label: 'Country',        type: 'text',  readonly: false, required: true },
  { key: 'accountNumber', label: 'Account Number', type: 'text',  readonly: true  },
  { key: 'bankCard',      label: 'Bank Card',      type: 'text',  readonly: true  },
];
