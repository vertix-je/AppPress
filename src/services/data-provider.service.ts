import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class DataProvider {
  data: Array<{url: string, observable: ReplaySubject<{}>}>;

  constructor(private http: Http) {
    this.data = [];
  }

  private dataObs$ = new ReplaySubject(1);

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
        this.http.get(url).map(res => res.json()).subscribe(
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


