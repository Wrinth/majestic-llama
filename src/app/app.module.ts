import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { MapComponent } from './map/map.component';
import { FactComponent } from './fact/fact.component';
import { QuizComponent } from './quiz/quiz.component';
import {AppRoutingModule} from "./app-routing.module";
import {FarmsService} from "./farms.service";
import {FactsService} from "./facts.service";
import {QuestionsService} from "./questions.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    MapComponent,
    FactComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA6Z9K9oJJNQj4enJbVW7kpmHmCwEUlpNw'
    })
  ],
  providers: [FarmsService, FactsService, QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
