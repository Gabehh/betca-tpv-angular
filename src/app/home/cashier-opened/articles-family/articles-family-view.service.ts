import {Injectable} from '@angular/core';
import {HttpService} from '../../../core/http.service';
import {AppEndpoints} from '../../../app-endpoints';
import {ArticleFamilyView} from './articles-family-view.model';
import {Observable} from 'rxjs';


@Injectable()
export class ArticlesFamilyViewService {

  constructor(private httpService: HttpService) {
  }

  readFamilyComposite(familyDescription: string): Observable<any[]> {
    return this.httpService
      .param('description', familyDescription)
      .get(AppEndpoints.ARTICLES_FAMILY + AppEndpoints.ARTICLES_FAMILY_COMPOSITE);
  }

  readArticlesFamilyList(familyDescription: string): Observable<ArticleFamilyView[]> {
    return this.httpService
      .get(AppEndpoints.ARTICLES_FAMILY + `/${familyDescription}`);
  }


  // readFamilyComposite(familyDescription: string): any {
  //   if (familyDescription === 'ROOT') {
  //     return [
  //       {id: '1', familyType: 'ARTICLES', reference: 'root'},
  //       {id: '1', familyType: 'ARTICLES', reference: 'Zz'},
  //       {id: '2', familyType: 'SIZES', reference: 'Zz Falda'},
  //       {id: '2', familyType: 'SIZES', reference: 'Zz Polo'},
  //       {id: '3', familyType: 'ARTICLE', reference: 'Zz Falda T2'},
  //       {id: '3', familyType: 'ARTICLE', reference: 'Zz polo T2'},
  //       {id: '3', familyType: 'ARTICLE', reference: 'Zz polo T4'},
  //       {id: '4', familyType: 'ARTICLES', reference: 'varios'},
  //       {id: '5', familyType: 'SIZES', reference: 'Zz Polo'},
  //     ];
  //   }
  // }


}
