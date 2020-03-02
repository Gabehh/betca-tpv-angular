import {Component} from '@angular/core';
import {Article} from '../shared/article.model';
import {MatDialog} from '@angular/material';
import {OrderCreationDialogComponent} from '../orders/order-creation-dialog.component';
import {ArticlesCreationDialogComponent} from './articles-creation-dialog.component';

@Component({
  templateUrl: 'articles-admin.component.html'
})

export class ArticlesAdminComponent {
  article: Article;
  title = 'Article Management';
  columns = ['Description', 'Price', 'Stock'];
  data: Article[];

  constructor(private dialog: MatDialog) {
    this.article = {description: null, provider: null, stock: null, retailPrice: null, discontinued: null, reference: null, code: null};
    this.data = null;
  }

  search() {
    // TODO
  }

  resetSearch() {
    // TODO
  }

  create() {
    this.dialog.open(ArticlesCreationDialogComponent);
  }

  read(article: Article) {
    // TODO
  }

  update(article: Article) {
    // TODO
  }

  delete(article: Article) {
    // TODO
  }
}
