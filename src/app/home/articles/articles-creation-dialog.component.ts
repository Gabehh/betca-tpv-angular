import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {Article} from '../shared/article.model';
import {ArticleService} from '../shared/article.service';

@Component({
  templateUrl: 'articles-creation-dialog.component.html'
})

export class ArticlesCreationDialogComponent {

  newArticle: Article = {
    description: null,
    provider: null,
    stock: null,
    retailPrice: null,
    discontinued: false,
    reference: null,
    code: null
  };
  tax: number;
  editMode: boolean;
  constructor(@Inject(MAT_DIALOG_DATA) data: any, private dialog: MatDialog,
              private dialogRef: MatDialogRef<ArticlesCreationDialogComponent>,
              private message: MatSnackBar, private articleService: ArticleService) {
    this.editMode = data.isEdit;
    if (data.isEdit) {
      this.articleService.readOne(data.code).subscribe(
        article => this.newArticle = article
      );
    }
  }

  createArticle() {
    // TODO
  }

  updateArticle() {
    this.articleService.update(this.newArticle.code, this.newArticle).subscribe(
      () => this.dialog.closeAll()
      , () => this.message.open('Ups, something bad happened.', null, {
        duration: 2000,
      })
      , () => this.message.open('Article updated successfully', null, {
        duration: 2000,
      })
    );
  }

}
