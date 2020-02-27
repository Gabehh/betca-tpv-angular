import {Injectable} from '@angular/core'  ;
import {HttpService} from '../../../core/http.service';
import {Observable} from 'rxjs';
import {Article} from '../../shared/article.model';
import {AppEndpoints} from '../../../app-endpoints';


@Injectable()
export class AdvancedArticlesSearchService {

  constructor(private httpService: HttpService) {
  }

  readAll(): Observable<Article[]> {
    return this.httpService.get(AppEndpoints.ARTICLES);
  }

}
