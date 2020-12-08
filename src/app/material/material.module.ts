import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


const Materialcomp = [
  MatButtonModule,
  MatIconModule,
  MatExpansionModule,
  MatFormFieldModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatListModule,
  MatAutocompleteModule
]


@NgModule({

  imports: [
    Materialcomp
  ],
  exports: [
    Materialcomp
  ]

})
export class MaterialModule { }
