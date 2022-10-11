import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent, CardCoverHeightDirective } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardCoordinatesSpyDirective } from './card/card-coordinates-spy.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardCoordinatesSpyDirective,
    CardCoverHeightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
}
