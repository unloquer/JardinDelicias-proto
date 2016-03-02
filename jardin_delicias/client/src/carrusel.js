import {inject} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';
import { bootstrap } from 'aurelia-bootstrapper';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Carrusel {
   @bindable router = null;
/*  heading = 'Github Users';
  sensores = [];

  constructor(http) {
    console.log("estoy en sensores");
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:3000/api/sensors');
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('')
      .then(response => response.json())
      .then(sensores => this.sensores = sensores);
  }*/
}
