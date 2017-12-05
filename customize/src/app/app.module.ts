import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { SvgtextComponent } from './svgtext/svgtext.component';
import { FontselectComponent } from './fontselect/fontselect.component';
import { TextparamsComponent } from './textparams/textparams.component';
import { DragDirective } from './drag.directive';
import { NebraskaComponent } from './nebraska/nebraska.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgtextComponent,
    FontselectComponent,
    TextparamsComponent,
    DragDirective,
    NebraskaComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
