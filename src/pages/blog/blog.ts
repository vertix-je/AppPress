import { Component, ViewChild } from '@angular/core';
import { NavController, Spinner } from 'ionic-angular';
import { Http } from '@angular/http';
import { PostDetail } from '../post-detail/post-detail';
import { DataProvider } from '../../services/data-provider.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html'
})
export class BlogPage {
  @ViewChild('loadingSpinner') loadingSpinner: Spinner;

	url: string = 'wp-json/wp/v2/posts';
	blogItems: any;

  constructor(public navCtrl: NavController, private http: Http, private dataProvider: DataProvider) {
  }
	
	ionViewDidEnter() {
    this.loadData();
	}

  loadData(forceRefresh?: boolean, refresher?: any) {
    this.dataProvider.getData(this.url, this.loadingSpinner, forceRefresh || false)
      .subscribe(
        data => {
          this.blogItems = data;
          if (refresher) {
            refresher.complete();
          }
        },
        error => console.log(error)
      );    
  }

  refresh(refresher) {
    this.loadData(true, refresher);    
  }

	itemTapped(event, item) {
		this.navCtrl.push(PostDetail, { item: item });
	}
}