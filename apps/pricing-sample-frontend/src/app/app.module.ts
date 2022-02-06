import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { GraphQLModule } from './graphql.module';
import { LayoutThreeModule } from './modules/layout/components/layout-three/layout-three.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    GraphQLModule,
    LayoutThreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
