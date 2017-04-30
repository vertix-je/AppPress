import { Component } from '@angular/core';
import { ViewController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-newsletter',
  templateUrl: 'newsletter.html'
})
export class NewsletterPage {
  constructor(public viewCtrl: ViewController, private alertCtrl: AlertController) {
  }
	
	ionViewDidEnter() {
	}

	subscribe() {
	  let alert = this.alertCtrl.create({
	    title: 'Subscribed',
	    subTitle: 'Thank you! You are now subscribed to our newsletter.',
    buttons: [
      {
        text: 'Okay',
        role: 'cancel',
        handler: () => {
			  	this.viewCtrl.dismiss();
        }
      }
    ]
	  });
	  alert.present();
	}

	dismiss() {
  	this.viewCtrl.dismiss();
	}
}