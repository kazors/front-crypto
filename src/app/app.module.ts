import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageChooserComponent } from './image-chooser/image-chooser.component';
import {HttpClientModule, HttpHeaders}from '@angular/common/http';
import { ResultComponent } from './result/result.component'
import { RouterModule, Routes } from '@angular/router';
import { HackerComponent } from './hacker/hacker.component';


const appRoutes: Routes = [
  {path:'result', component:ResultComponent},
  {path:'',component:ImageChooserComponent},
  {path: 'hacker',component:HackerComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ImageChooserComponent,
    ResultComponent,
    HackerComponent,
    
    
  ],
  imports: [
    HttpClientModule,
    
    BrowserModule,
    AppRoutingModule,
    
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: false } // <-- debugging purposes only
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  
 }
