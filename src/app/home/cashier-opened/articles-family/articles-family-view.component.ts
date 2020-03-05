import {Component} from '@angular/core';
import {ArticleFamilyView} from './articles-family-view.model';
import {ArticlesFamilyViewService} from './articles-family-view.service';

@Component({
  selector: 'app-articles-family-view',
  templateUrl: 'articles-family-view.component.html'
})
export class ArticlesFamilyViewComponent {
  articlesFamilyList: ArticleFamilyView[] = [];

  constructor(private articlesFamilyViewService: ArticlesFamilyViewService) {
    this.articlesFamilyViewService.readFamilyComposite('ROOT')
      .subscribe(
        data => {
          console.log(data);
          this.articlesFamilyList = data;
        }
      );
  }
}
