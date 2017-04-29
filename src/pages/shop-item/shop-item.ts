import {NavController, NavParams} from 'ionic-angular';
import {Component} from '@angular/core';

@Component({
  templateUrl: 'shop-item.html'
})
export class ShopItem {
  selectedItem: any;

  constructor(private nav: NavController, navParams: NavParams) {
    this.selectedItem = navParams.get('item');
  }  
}