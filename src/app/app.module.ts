import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';
import { HttpClientModule } from '@angular/common/http';
import {TcNewsServiceService} from './tc-news-service.service';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
@NgModule({
  declarations: [
    AppComponent,
    TopheadlinesComponent,
    TechNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
    
  ],
  providers: [TcNewsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
