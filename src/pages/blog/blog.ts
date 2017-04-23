import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { PostDetail } from '../post-detail/post-detail';
import { DataProvider } from '../../services/data-provider.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html'
})
export class BlogPage {
	url: string = 'http://app.filmstarr.co.uk/wp-json/wp/v2/posts';
	blogItems: any;

  constructor(public navCtrl: NavController, private http: Http, private nav: NavController, private dataProvider: DataProvider) {
  }
	
	ionViewDidEnter() {
    this.dataProvider.getData(this.url)
      .subscribe(
        data => {
          this.blogItems = data;
        },
        error => console.log(error)
      );
	}

	itemTapped(event, item) {
		this.nav.push(PostDetail, {
		  item: item
		});
	}
}