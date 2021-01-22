import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HomePageModule } from './pages/home/home.module';
import { DynamicContentOutletModule } from './pages/home/dynamic-content-outlet/dynamic-content-outlet.module';
import { CustomersComponent } from './components/customers/customers.component';

@NgModule({
  declarations: [AppComponent, CustomersComponent],
  imports: [

  BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    DynamicContentOutletModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
