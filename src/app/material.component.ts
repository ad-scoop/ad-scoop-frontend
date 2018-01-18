import {NgModule} from '@angular/core';
import {
  MatRadioModule,
  MatSelectModule,
  MatAccordion,
  MatInputModule,
  MatChipsModule,
  MatFormFieldModule,
  MatMenuModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatDialogModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule, 
  MatAutocompleteModule
} from '@angular/material';

@NgModule({
  exports: [
    MatSelectModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatInputModule,
    
    MatMenuModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class MaterialComponent {}
