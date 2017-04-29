import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';

declare var WooCommerceAPI: any;

@Injectable()
export class DataProvider {
  baseUrl = 'http://app.filmstarr.co.uk';
  data: Array<{url: string, observable: ReplaySubject<{}>}>;
  wooCommerceApi: any;

  constructor(private http: Http) {
    this.data = [];

    this.wooCommerceApi = WooCommerceAPI.WooCommerceAPI({
      url: this.baseUrl,
      consumerKey: 'ck_9adeb490b0d8853acb187fc07e69a84909fc7e66',
      consumerSecret: 'cs_6ae60c344e399411e4954c0578a177fa8efe4fbb',
      wpAPI: true,
      version: 'wc/v1'
    });
  }

  getData(url: string, forceRefresh?: boolean) {
    var requestData = this.data.find(myObj => myObj.url == url);
    var observable;
    if (!requestData) {
      observable = new ReplaySubject(1);
      this.data.push({url: url, observable: observable});
    } else {
      observable = requestData.observable;
    }

    if (!observable.observers.length || forceRefresh) {
      this.http.get(this.baseUrl + '/' + url.replace(/^(\/)/,"")).map(res => res.json()).subscribe(
          data => observable.next(data),
          error => {
              observable.error(error);
              observable = new ReplaySubject(1);
          }
      );
    }
    return observable;
  }

  getWooData(url: string, forceRefresh?: boolean) {
    var requestData = this.data.find(myObj => myObj.url == url);
    var observable;
    if (!requestData) {
      observable = new ReplaySubject(1);
      this.data.push({url: url, observable: observable});
    } else {
      observable = requestData.observable;
    }

    if (!observable.observers.length || forceRefresh) {
      Observable.fromPromise<any>(this.wooCommerceApi.getAsync(url)).subscribe(
        data => observable.next(data),
        error => {
            observable.error(error);
            observable = new ReplaySubject(1);
        }
      );
    }
    return observable;
  }
}


