import {Component} from '@angular/core';
import {Article} from '../shared/article.model';
import {MatDialog} from '@angular/material';
import {ArticlesCreationDialogComponent} from './articles-creation-dialog.component';
import {ArticlesMocksService} from './articles-mocks.service';
import {ArticlesDetailDialogComponent} from './articles-detail-dialog.component';
import {ArticleService} from '../shared/article.service';

@Component({
  templateUrl: 'articles-admin.component.html'
})

export class ArticlesAdminComponent {
  article: Article;
  title = 'Article Management';
  columns = ['code', 'description', 'retailPrice', 'stock'];
  data: Article[];
  isEdit: boolean;

  constructor(private dialog: MatDialog, private articlesMocksService: ArticlesMocksService, private articleService: ArticleService) {
    this.article = {description: null, provider: null, stock: null, retailPrice: null, discontinued: null, reference: null, code: null};
    // this.data = null;
  }

  search() {
    // TODO
    if (this.article.description == null && this.article.provider == null) {
      this.articleService.readAll().subscribe(
        data => this.data = data
      );
    } else {
      this.articleService.search(this.article.description, this.article.provider).subscribe(
        data => this.data = data
      );
    }
  }

  resetSearch() {
    this.article = {description: null, provider: null, stock: null, retailPrice: null, discontinued: null, reference: null, code: null};
  }

  create() {
    this.isEdit = false;
    this.dialog.open(ArticlesCreationDialogComponent,
      {
        width: '500px',
        data: {
          isEdit: this.isEdit
        }
      }
    );
  }

  read(article: Article) {
    // TODO
    this.dialog.open(ArticlesDetailDialogComponent,
      {
        width: '400px',
        data: {
          code: article.code
        }
      }
    );
  }

  update(article: Article) {
    this.isEdit = true;
    this.dialog.open(ArticlesCreationDialogComponent,
      {
        width: '500px',
        data: {
          code: article.code,
          isEdit: this.isEdit
        }
      }
    ).afterClosed().subscribe(
      result => {
        this.search();
      }
    );
  }

  delete(article: Article) {
    // TODO
  }
}
