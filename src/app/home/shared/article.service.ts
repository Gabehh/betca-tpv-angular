import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {AppEndpoints} from '../../app-endpoints';
import {HttpService} from '../../core/http.service';
import {Article} from './article.model';

@Injectable()
export class ArticleService {

  constructor(private httpService: HttpService) {
  }

  readOne(code: string): Observable<Article> {
    return this.httpService.get(AppEndpoints.ARTICLES + '/' + code);
  }
  readAll(): Observable<Article[]> {
    return this.httpService.get(AppEndpoints.ARTICLES);
  }

  create(article: Article): Observable<Article> {
    return this.httpService.successful().post(AppEndpoints.ARTICLES, article);
  }
}
