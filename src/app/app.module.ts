import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageChooserComponent } from './image-chooser/image-chooser.component';
import {HttpClientModule, HttpHeaders}from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ImageChooserComponent,
    
    
  ],
  imports: [
    HttpClientModule,
    
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
