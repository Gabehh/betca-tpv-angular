import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {Voucher} from '../../../shared/voucher.model';
import {VoucherService} from '../../../shared/voucher.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: 'voucher-creation-dialog.component.html'
})

export class VoucherCreationDialogComponent implements OnInit {

  newVoucher: Voucher = {value: null, id: null, dateOfUse: null, creationDate: null };
  createVoucherForm: FormGroup;
  submitted = false;

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<VoucherCreationDialogComponent>,
              private voucherService: VoucherService, private message: MatSnackBar, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createVoucherForm = this.formBuilder.group({
      value: ['', [Validators.required, Validators.min(0.01), Validators.max(1000)]],
    });
  }

  createVoucher() {
    this.submitted = true;

    if (this.createVoucherForm.invalid) {
      return;
    }

    this.voucherService.create(this.newVoucher).subscribe(
      () => this.dialog.closeAll()
      , () => this.message.open('Ups, something bad happened. The voucher should have a value major than 0 and minor than 1000', null, {
          duration: 2000,
        })
      , () => this.message.open('Voucher created successfully', null, {
          duration: 2000,
        })
      );
  }
}
