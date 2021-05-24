import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoryComponent } from './repository/repository.component';
import { SearchComponent } from './search/search.component';
import { NavComponent } from './nav/nav.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    SearchComponent,
    NavComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
