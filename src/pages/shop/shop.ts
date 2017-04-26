import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

declare var WooCommerceAPI: any;

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {
  selectedItem: any;
  products: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public zone: NgZone) {
    var WooCommerce = WooCommerceAPI.WooCommerceAPI({
      url: 'http://app.filmstarr.co.uk',
      consumerKey: 'ck_9adeb490b0d8853acb187fc07e69a84909fc7e66',
      consumerSecret: 'cs_6ae60c344e399411e4954c0578a177fa8efe4fbb',
      wpAPI: true,
      version: 'wc/v1'
    });

    WooCommerce.getAsync('products').then(result => {
      this.products = JSON.parse(result.toJSON().body);
      this.zone.run(() => {});
    });
  }

  itemTapped(event, product) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ShopPage, {
      product: product
    });
  }
}
