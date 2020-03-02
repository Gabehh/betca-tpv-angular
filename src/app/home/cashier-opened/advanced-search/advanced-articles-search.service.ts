import {Injectable} from '@angular/core'  ;
import {HttpService} from '../../../core/http.service';
import {Observable} from 'rxjs';
import {Article} from '../../shared/article.model';
import {AppEndpoints} from '../../../app-endpoints';


@Injectable()
export class AdvancedArticlesSearchService {
  data: Article[];
  constructor(private httpService: HttpService) {
  }

  readAll(): Article[] {
    // return this.httpService.get(AppEndpoints.ARTICLES);
    this.data = [
      {code: '21', description: 'Falda T2', reference: 'Fa T2', stock: 24, retailPrice: 10},
      {code: '22', description: 'Pantalon vaquero', reference: 'Pant Vaq', stock: 10, retailPrice: 23}
    ];
    return this.data;
  }

}
