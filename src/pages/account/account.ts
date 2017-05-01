import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
	signUpIn: string = "signUp";

  constructor(public navCtrl: NavController, private http: Http, private nav: NavController) {
  }
	
	ionViewDidEnter() {
	}
}