import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './Components/main-component/main-component.component';
import { GeneratorService } from './Services/GeneratorService/generator-service.service';
import { DragDropDirective } from './drag-drop.directive';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    DragDropDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GeneratorService
  ],
  bootstrap: [
    AppComponent,
    MainComponentComponent
  ]
})
export class AppModule { }
