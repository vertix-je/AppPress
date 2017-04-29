import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShopItem } from '../shop-item/shop-item';
import { DataProvider } from '../../services/data-provider.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {
  selectedItem: any;
  products: any;

  constructor(public navCtrl: NavController, public zone: NgZone, private dataProvider: DataProvider) {
  }

  ionViewDidEnter() {
    this.dataProvider.getWooData('products')
      .subscribe(
        data => {
          this.products = JSON.parse(data.body);
          this.zone.run(() => {});
        },
        error => console.log(error)
      );
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ShopItem, {
      item: item
    });
  }
}