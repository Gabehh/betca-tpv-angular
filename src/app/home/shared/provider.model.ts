export interface Provider {
  id?: string;
  company: string;
  nif: string;
  note?: string;
  email?: string;
  phone: string;
  address?: string;
  active?: boolean;
}
