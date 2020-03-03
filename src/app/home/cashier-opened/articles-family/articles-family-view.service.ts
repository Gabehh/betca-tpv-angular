import {Injectable} from '@angular/core';
import {HttpService} from '../../../core/http.service';
import {Observable} from 'rxjs';
import {ArticleFamilyView} from './articles-family-view.model';
import {AppEndpoints} from '../../../app-endpoints';


@Injectable()
export class ArticleFamilyViewService {

  constructor(private httpService: HttpService) {
  }

  readFamilyComposite(familyDescription: string): Observable<ArticleFamilyView[]> {
    return this.httpService
      .param('description', familyDescription)
      .get(AppEndpoints.ARTICLES_FAMILY + AppEndpoints.ARTICLES_FAMILY_COMPOSITE);
  }

}
