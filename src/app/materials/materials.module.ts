import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTreeModule} from '@angular/material/tree';
const MaterialComponents=[
  MatButtonModule,
  MatGridListModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatTabsModule,
  MatTreeModule

];
@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialsModule { }
