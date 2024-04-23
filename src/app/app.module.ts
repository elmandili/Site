import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { Routes } from "@angular/router";
import { PageOneComponent } from "./page-one/page-one.component";
import { PageTwoComponent } from "./page-two/page-two.component";
import { provideRouter } from "@angular/router";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TableTwoComponent } from './tables/table-two/table-two.component';
import { TableFiveComponent } from './tables/table-five/table-five.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TableFourComponent } from './tables/table-four/table-four.component';
import { MaterialModule } from '../Material.Module';




@NgModule({
  declarations: [
    AppComponent,
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavComponent,
    MaterialModule,
    TableTwoComponent,
    TableFourComponent,
    RouterModule,
    TableFiveComponent
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
