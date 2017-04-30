import { Component, ViewChild, NgZone } from '@angular/core';
import { NavController, Spinner } from 'ionic-angular';
import { ShopItem } from '../shop-item/shop-item';
import { DataProvider } from '../../services/data-provider.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {
  @ViewChild('loadingSpinner') loadingSpinner: Spinner;

  selectedItem: any;
  products: any;

  constructor(public navCtrl: NavController, public zone: NgZone, private dataProvider: DataProvider) {
  }

  ionViewDidEnter() {
    this.loadData();
  }

  loadData(forceRefresh?: boolean, refresher?: any) {
    this.zone.run(() => {});

    this.dataProvider.getWooData('products', this.loadingSpinner, forceRefresh || false)
      .subscribe(
        data => {
          this.products = JSON.parse(data.body);
          if (refresher) {
            refresher.complete();
          }
          this.zone.run(() => {});
        },
        error => console.log(error)
      );  
  }

  refresh(refresher) {
    this.loadData(true, refresher);    
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ShopItem, {
      item: item
    });
  }
}