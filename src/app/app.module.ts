import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TableTwoComponent } from './tables/table-two/table-two.component';
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
    TableFourComponent
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
