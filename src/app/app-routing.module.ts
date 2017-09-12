import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from "./main/main.component";
import {AboutComponent} from "./about/about.component";
import {MapComponent} from "./map/map.component";
import {FactComponent} from "./fact/fact.component";
import {QuizComponent} from "./quiz/quiz.component";

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'map', component: MapComponent },
  { path: 'fact', component: FactComponent },
  { path: 'quiz', component: QuizComponent }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
