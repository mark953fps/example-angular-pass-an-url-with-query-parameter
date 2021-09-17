import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  region = 'MACAU'; //assuming this is the region that you used in the api.

  ngOnInit() {
    if (this.region !== 'CYPRUS') {
      this.dummyApi(this.region);
    }
  }

  dummyApi(region) {
    let url = 'dummyUrl/&region=' + region;
    console.log(url);
  }
}
