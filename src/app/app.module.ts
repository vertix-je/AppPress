import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { BlogPage } from '../pages/blog/blog';
import { InfoPage } from '../pages/info/info';
import { ShopPage } from '../pages/shop/shop';
import { AccountPage } from '../pages/account/account';
import { TermsPage } from '../pages/terms/terms';
import { PostDetail } from '../pages/post-detail/post-detail';

import { DataProvider } from '../services/data-provider.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    BlogPage,
    InfoPage,
    ShopPage,
    AccountPage,
    TermsPage,
    PostDetail
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BlogPage,
    InfoPage,
    ShopPage,
    AccountPage,
    TermsPage,
    PostDetail
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
