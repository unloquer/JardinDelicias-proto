import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Sensores {
  heading = 'Github Users';
  sensors = [];

  name = '';
  description = '';
  brand = '';
  model = '';
  status = '';
  type = '';
  location = '';
  maxValue = '';
  minValue = '';
  id = '';
  resourceId = '';
  sensorId = '';
// variable para almacenar datos del ESP

  setSensors(sensors){

    console.log("set sensors");
    this.sensors = sensors;  
    console.log(sensors);
  }
  getEsps(){

     
     var self = this;

     this.http.fetch("" ).then(
        response => response.json()).then(
        json => self.setSensors(json));

  }

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
  }
}
