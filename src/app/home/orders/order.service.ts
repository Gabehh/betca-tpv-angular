import {Injectable} from '@angular/core';
import {HttpService} from '../../core/http.service';
import {Observable, of} from 'rxjs';
import {Order} from '../orders/order.model';
import {OrderLine} from './orderLine.model';

@Injectable()
export class OrderService {

  ordersMockList: Order[];
  orderLinesMockList: OrderLine[];

  constructor(private httpService: HttpService) {
    this.orderLinesMockList =[
      {articleId: '15651', requiredAmount: 5, finalAmount: null},
      {articleId: '984651', requiredAmount: 5, finalAmount: null},
      {articleId: '5641981', requiredAmount: 5, finalAmount: null},
    ];
    this.ordersMockList = [
      {providerId: '1154', description: 'Order 1', openingDate: new Date(), closingDate: null, orderLines: this.orderLinesMockList},
      {providerId: '4421', description: 'Order 2', openingDate: new Date(), closingDate: null, orderLines: this.orderLinesMockList},
      {providerId: '5431', description: 'Order 3', openingDate: new Date(), closingDate: null, orderLines: this.orderLinesMockList},
    ];
  }

  getAll(): Observable<Order[]> {
    return of(this.ordersMockList);
  }

  createOrder(newOrder: Order): Observable<Order> {
    const order: Order = {
      providerId: newOrder.providerId,
      description: newOrder.description,
      openingDate: new Date(),
      closingDate: null,
      orderLines: newOrder.orderLines
    };
    this.ordersMockList.push(order);
    return of(order);
  }
}
