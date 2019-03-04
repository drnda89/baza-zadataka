import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';

const material = [
  MatExpansionModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatToolbarModule,MatSelectModule,MatGridListModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
