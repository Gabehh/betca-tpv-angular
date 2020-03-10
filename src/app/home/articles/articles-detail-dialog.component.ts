import {Component, Inject} from '@angular/core';
import {Article} from '../shared/article.model';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {ArticleService} from '../shared/article.service';

@Component({
  templateUrl: 'articles-detail-dialog.component.html'
})

export class ArticlesDetailDialogComponent {
  article: Article = {
    description: null,
    provider: null,
    stock: null,
    retailPrice: null,
    discontinued: false,
    reference: null,
    code: null
  };
  color = 'warn';

  constructor(@Inject(MAT_DIALOG_DATA) data: any, private dialog: MatDialog,
              private dialogRef: MatDialogRef<ArticlesDetailDialogComponent>,
              private message: MatSnackBar, private articleService: ArticleService) {
    this.articleService.readOne(data.code).subscribe(
      article => this.article = article
    );
  }
}
