import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

const MaterialComponents = [
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatNativeDateModule,
  MatFormFieldModule
]

@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
