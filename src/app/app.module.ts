import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './modules/shared/shared.module';
import {MainModule} from './modules/main/main.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ErrorInterceptor, fakeBackendProvider, JwtInterceptor} from './modules/auth/_helpers';
import {MainComponent} from './modules/main.component';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    MainModule,
    SharedModule,
    HttpClientModule,
    BrowserModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
