import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { PostDetail } from '../post-detail/post-detail';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
	url: string = 'http://app.filmstarr.co.uk/wp-json/wp/v2/posts';
	items: any;

  constructor(public navCtrl: NavController, private http: Http, private nav: NavController) {
  }
	
	ionViewDidEnter() {
		this.http.get( this.url )
	    .map(res => res.json())
	    .subscribe(data => {
	      // we've got back the raw data, now generate the core schedule data
	      // and save the data for later reference
	      this.items = data;
	    });
	}

	itemTapped(event, item) {
		this.nav.push(PostDetail, {
		  item: item
		});
	}
}