import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumberComponent } from './number/number.component';
import { GeneratorComponent } from './generator/generator.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberComponent,
    GeneratorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
