import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Article} from '../../shared/article.model';
import {ArticleService} from '../../shared/article.service';

@Component({
  templateUrl: 'article-quick-creation-dialog.component.html',
  styleUrls: ['shopping-cart.component.css']
})
export class ArticleQuickCreationDialogComponent {

  article: Article;

  constructor(private articleService: ArticleService, private dialogRef: MatDialogRef<ArticleQuickCreationDialogComponent>) {
  }

  invalidArticle(): boolean {
    return !this.article.description || !this.article.retailPrice;
  }

  create() {
    this.articleService.create(this.article).subscribe(
      newArticle => this.dialogRef.close(newArticle)
    );
  }
}
