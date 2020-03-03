import {Component} from '@angular/core';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {Article} from '../shared/article.model';
@Component({
  templateUrl: 'articles-creation-dialog.component.html'
})

export class ArticlesCreationDialogComponent {


  newArticle: Article = {description: null, provider: null, stock: null, retailPrice: null, discontinued: null, reference: null, code: null};
  tax: number;

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<ArticlesCreationDialogComponent>, private message: MatSnackBar) {
  }
  createArticle() {
    // TODO
  }

}
