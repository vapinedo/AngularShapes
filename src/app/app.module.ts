import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShapeCreateComponent } from './components/shape/shape-create.component';

const modules = [
  BrowserModule,
  ReactiveFormsModule, 
  AppRoutingModule
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
