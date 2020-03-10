import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Article} from '../shared/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesMocksService {
  articulos: Article[] = [
    {code: '8400000000017', description: 'Zarzuela - Falda T2', reference: 'Fa T2', stock: 10, retailPrice: 20},
    {code: '8400000000024', description: 'Zarzuela - Falda T4', reference: 'Zz Falda T4', stock: 5, retailPrice: 27.8},
    {code: '8400000000031', description: 'descrip-a3', reference: 'ref-a3', stock: 8, retailPrice: 10.12},
  ];

  constructor() {
  }

  getAll(): Observable<Article[]> {
    return of(this.articulos);
  }
}
