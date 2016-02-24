import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Main {
  heading = 'Github Users';
  resources = [];

  constructor(http) {
    console.log("hola");
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:3000/api/');
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('resources')
      .then(response => response.json())
      .then(resources => this.resources = resources);
  }
}
