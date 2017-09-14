import {NgModule} from '@angular/core';
import {
  MdRadioModule,
  MdSelectModule,
  MdAutocompleteModule,
  MdInputModule,
  MdChipsModule,
  MdFormFieldModule,
  MdCoreModule,
  MdMenuModule,
  MdCheckboxModule,
  MdSnackBarModule,
  MdDialogModule,
  MdCardModule,
  MdButtonModule,
  MdIconModule,
} from '@angular/material';

@NgModule({
  exports: [
    MdSelectModule,
    MdAutocompleteModule,
    MdChipsModule,
    MdInputModule,
    MdCoreModule,
    MdMenuModule,
    MdCheckboxModule,
    MdSnackBarModule,
    MdDialogModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
  ]
})
export class MaterialModule {}
