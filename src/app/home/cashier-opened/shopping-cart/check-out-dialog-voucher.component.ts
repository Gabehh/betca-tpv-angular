import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VoucherService} from '../../shared/voucher.service';
import {Voucher} from '../../shared/voucher.model';

@Component({
  templateUrl: 'check-out-dialog-voucher.component.html'
})

export class CheckOutDialogVoucherComponent implements OnInit {

  consumeVoucherForm: FormGroup;
  submitted = false;
  voucher: Voucher;

  constructor(private dialog: MatDialog, private dialogRef: MatDialogRef<CheckOutDialogVoucherComponent>,
              private voucherService: VoucherService, private message: MatSnackBar, private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.voucher = this.data.voucher_object;
  }

  ngOnInit() {
    this.consumeVoucherForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.minLength(22)]],
    });
  }

  consumeVoucher() {
    this.submitted = true;

    if (this.consumeVoucherForm.invalid) {
      return;
    }

    this.voucherService.consume(this.voucher).subscribe(
      voucher => {
        if ((Date.now().valueOf() - new Date(voucher.dateOfUse).valueOf() < 500)) {
          this.voucher.value = voucher.value;
          this.message.open('Voucher consumed successfully. It has been applied.', null, {
            duration: 2000,
          });
        } else {
          this.message.open('Ups! That voucher has been used previously', null, {
            duration: 2000,
          });
        }
      }
      , () => this.message.open('Ups, something bad happened. Any voucher with that code has been found', null, {
        duration: 2000,
      })
    );
    this.dialogRef.close(this.dialog);
  }
}
