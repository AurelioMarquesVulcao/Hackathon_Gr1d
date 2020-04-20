import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AppComponent } from './app.component';
import { CheckCNHComponent } from './components/check-cnh/check-cnh.component';
import { CotacaoComponent } from './components/cotacao/cotacao.component';
import { Cotacao2Component } from './components/cotacao2/cotacao2.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'cnh', component: CheckCNHComponent },
  { path: 'cotacao', component: CotacaoComponent },
  { path: 'cotacao2', component: Cotacao2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
