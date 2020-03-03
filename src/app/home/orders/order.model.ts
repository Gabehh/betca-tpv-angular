import {OrderLine} from './orderLine.model';

export interface Order {
  description: string;
  providerId: string;
  openingDate: Date;
  closingDate?: Date;
  orderLines: OrderLine[];
}
