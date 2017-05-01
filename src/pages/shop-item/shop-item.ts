import {NavController, NavParams, AlertController} from 'ionic-angular';
import {Component} from '@angular/core';

@Component({
  templateUrl: 'shop-item.html'
})
export class ShopItem {
  selectedItem: any;

  constructor(private nav: NavController, navParams: NavParams, private alertCtrl: AlertController) {
    this.selectedItem = navParams.get('item');
  }

  addItemToCart(event, item) {
    let alert = this.alertCtrl.create({
      title: 'Added to cart',
      subTitle: 'You added ' + item.name + ' to your cart.',
      buttons: ['View Cart', 'Okay']
      });
    alert.present();
    event.stopPropagation();
  }
}