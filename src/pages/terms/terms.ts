import { Component, ViewChild } from '@angular/core';
import { NavController, Spinner } from 'ionic-angular';
import { Http } from '@angular/http';
import { DataProvider } from '../../services/data-provider.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html'
})
export class TermsPage {
  @ViewChild('loadingSpinner') loadingSpinner: Spinner;

  url: string = 'wp-json/wp/v2/pages/16';
  termsItem: any;

  constructor(public navCtrl: NavController, private http: Http, private nav: NavController, private dataProvider: DataProvider) {
  }
  
  ionViewDidEnter() {
    this.dataProvider.getData(this.url, this.loadingSpinner)
      .subscribe(
        data => {
          this.termsItem = data;
        },
        error => console.log(error)
      );
  }
}



