import {OrderLine} from './orderLine.model';

export interface Order {
  id: string;
  description: string;
  providerId: string;
  openingDate: Date;
  closingDate?: Date;
  orderLines: OrderLine[];
}
