import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BlogPage } from '../pages/blog/blog';
import { InfoPage } from '../pages/info/info';
import { ShopPage } from '../pages/shop/shop';
import { AccountPage } from '../pages/account/account';
import { TermsPage } from '../pages/terms/terms';
import { NewsletterPage } from '../pages/newsletter/newsletter';

import { DataProvider } from '../services/data-provider.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = BlogPage;

  pages: Array<{title: string, component: any, icon: string}>;
  
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public modalCtrl: ModalController, private dataProvider: DataProvider) {
    this.initializeApp();

    //Fire off some initial requests so that we pre-cache our data
    this.dataProvider.getData('wp-json/wp/v2/pages/25');
    this.dataProvider.getData('wp-json/wp/v2/pages/16');
    this.dataProvider.getWooData('products');

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Blog', component: BlogPage, icon: 'paper' },
      { title: 'Info', component: InfoPage, icon: 'information-circle' },
      { title: 'Shop', component: ShopPage, icon: 'basket' },
      { title: 'Account', component: AccountPage, icon: 'person' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openTerms() {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(TermsPage);
  }

  presentProfileModal() {
    let profileModal = this.modalCtrl.create(NewsletterPage, { });
    profileModal.present();
  }
}