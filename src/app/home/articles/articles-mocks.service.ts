import { Injectable } from '@angular/core';
import {from, Observable, ObservedValueOf, of} from 'rxjs';
import {Article} from '../shared/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesMocksService {

  constructor() { }
  getAll(): Observable<Article[]> {
    const articulos: Article[] = [
      {code: '21', description: 'Falda T2', reference: 'Fa T2', stock: 24, retailPrice: 10},
      {code: '22', description: 'Falda T3', reference: 'Fa T3', stock: 24, retailPrice: 15},
      {code: '23', description: 'Falda T4', reference: 'Fa T4', stock: 24, retailPrice: 20},
    ];
    return of (articulos);
  }
}
