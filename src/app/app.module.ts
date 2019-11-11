import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialsModule} from './materials/materials.module';
import { LeftEditorComponent } from './left-editor/left-editor.component';
import { RightEditorComponent } from './right-editor/right-editor.component';
import { ContentComponent } from './content/content.component'

@NgModule({
  declarations: [
    AppComponent,
    LeftEditorComponent,
    RightEditorComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
