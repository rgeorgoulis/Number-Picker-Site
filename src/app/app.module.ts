import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BetSelectorComponent } from './components/bet-selector/bet-selector.component';
import { NumberSelectorComponent } from './components/number-selector/number-selector.component';
import { CalculationAreaComponent } from './components/calculation-area/calculation-area.component';
import { HeaderComponent } from './components/header/header.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    BetSelectorComponent,
    NumberSelectorComponent,
    CalculationAreaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
