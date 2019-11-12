import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTreeModule} from '@angular/material/tree';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/';
import {MatChipsModule} from '@angular/material/chips';
import {DragDropModule} from '@angular/cdk/drag-drop';
const MaterialComponents=[
  MatButtonModule,
  MatGridListModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatTabsModule,
  MatTreeModule,
  MatDividerModule,
  MatListModule,
  MatChipsModule,
  DragDropModule
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
