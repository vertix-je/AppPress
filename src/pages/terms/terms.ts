import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html'
})
export class TermsPage {
  url: string = 'http://app.filmstarr.co.uk/wp-json/wp/v2/pages/16';
  items: any;
  selectedItem: any;

  constructor(public navCtrl: NavController, private http: Http, private nav: NavController) {

  }
  
  ionViewDidEnter() {
    this.http.get( this.url )
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.selectedItem = data;
      });
  }
}



