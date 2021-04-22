import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {  AlertModule } from 'ngx-bootstrap/alert'
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AlertModule.forRoot(), TabsModule.forRoot(),  AgGridModule.withComponents([])  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
