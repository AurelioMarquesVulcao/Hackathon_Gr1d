import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { CheckCNHComponent } from './components/check-cnh/check-cnh.component';
import { CotacaoComponent } from './components/cotacao/cotacao.component';
import { Cotacao2Component } from './components/cotacao2/cotacao2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CheckCNHComponent,
    CotacaoComponent,
    Cotacao2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
