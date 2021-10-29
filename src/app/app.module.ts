import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumberComponent } from './number/number.component';
import { GeneratorComponent } from './generator/generator.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberComponent,
    GeneratorComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
