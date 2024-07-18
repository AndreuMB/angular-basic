import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/components/counter.module';

import { AppComponent } from './app.component';
import { WarframesModule } from './warframes/warframes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CounterModule, WarframesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
