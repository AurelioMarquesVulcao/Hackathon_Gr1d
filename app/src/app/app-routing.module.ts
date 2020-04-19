import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AppComponent } from './app.component';
import { CheckCNHComponent } from './components/check-cnh/check-cnh.component'


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'cnh', component: CheckCNHComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap:[AppComponent]
})
export class AppRoutingModule { }
