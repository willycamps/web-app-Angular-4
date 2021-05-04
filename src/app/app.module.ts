import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { VideosComponent } from './components/videos/videos.component';
import { HomeComponent } from './components/home/home.component';

import { appRoutes } from '../routes'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutusComponent,
    VideosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
