import { formatsAvailable, formatNames } from './barcodepopup';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BarcodeFormat } from '@zxing/library';
import { Component, OnInit, Inject } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-formating',
  templateUrl: './formating.component.html',
  styleUrls: ['./formating.component.css']
})
export class FormatingComponent {
  formatsAvailable = formatsAvailable;

  formatsEnabled: BarcodeFormat[];

  readonly formatNames = formatNames;

  constructor(
    @Inject(MAT_DIALOG_DATA) readonly data: any,
    private readonly _dialogRef: MatDialogRef<FormatingComponent>,
  ) {
    this.formatsEnabled = data.formatsEnabled || [];
  }

  close() {
    this._dialogRef.close(this.formatsEnabled);
  }

  isEnabled(format: BarcodeFormat) {
    return this.formatsEnabled.find(x => x === format);
  }

  onSelectionChange(event: MatSelectionListChange) {
    this.formatsEnabled = event.source.selectedOptions.selected.map(selected => selected.value);
  }
}
