import {Component} from '@angular/core';
import {ArticleFamilyView} from './articles-family-view.model';
import {ArticlesFamilyViewService} from './articles-family-view.service';

@Component({
  selector: 'app-articles-family-view',
  templateUrl: 'articles-family-view.component.html',
  styleUrls: ['articles-family-view.component.css']
})
export class ArticlesFamilyViewComponent {
  articlesFamilyList: ArticleFamilyView[] = [];

  constructor(private articlesFamilyViewService: ArticlesFamilyViewService) {
    console.log('constructor');

    this.articlesFamilyViewService.readFamilyComposite('root')
      .subscribe(
        data => {
          console.log('data is here');
          console.log(data);
          this.articlesFamilyList = data;
        }
      );
    // this.articlesFamilyList = this.articlesFamilyViewService.readFamilyComposite('ROOT');
    console.log(this.articlesFamilyList);
  }
}
