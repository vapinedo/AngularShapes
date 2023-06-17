import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShapeCreateComponent } from './components/shape/shape-create.component';

const modules = [
  BrowserModule,
  ReactiveFormsModule, 
  AppRoutingModule,
  HttpClientModule
];

const components = [
  AppComponent,
  ShapeCreateComponent,
];

@NgModule({
  declarations: [components],
  imports: [modules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
