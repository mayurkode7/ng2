import { AddEmployeeComponent } from './components/addemployee.component';
import { FilterPipe } from './pipes/pipe.filter';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about.component';

import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddEmployeeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
