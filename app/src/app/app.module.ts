import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { CheckCNHComponent } from './components/check-cnh/check-cnh.component';
import { CotacaoComponent } from './components/cotacao/cotacao.component';
import { Cotacao2Component } from './components/cotacao2/cotacao2.component';
import { from } from 'rxjs';

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
  providers: [HttpClient, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
