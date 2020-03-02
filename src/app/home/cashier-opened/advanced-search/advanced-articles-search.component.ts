import {Component} from '@angular/core';
import {Article} from '../../shared/article.model';
import {AdvancedArticlesSearchService} from './advanced-articles-search.service';

@Component({
  selector: 'app-advanced-articles-search',
  templateUrl: 'advanced-articles-search.component.html'
})
export class AdvancedArticlesSearchComponent {

  title = 'Articles';
  data: Article[];
  columns = ['description', 'reference', 'stock', 'retailPrice'];

  constructor(private advancedArticlesSearchService: AdvancedArticlesSearchService) {
    // this.user = {mobile: null, username: null};
    this.data = null;
  }
  search() {
   /* this.advancedArticlesSearchService.readAll().subscribe(
      data => this.data = data
    );*/
   this.data = this.advancedArticlesSearchService.readAll();
  }
}
