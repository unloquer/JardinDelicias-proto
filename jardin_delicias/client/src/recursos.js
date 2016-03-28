import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import 'fetch';
import 'bootstrap-datepicker';

@inject(HttpClient)
export class Recursos {

   name = '';
   description ='';
   type = '';
   location = '';
   tipoRecurso(tipo){
      console.log(tipo);

      this.type=tipo;
   
   }

   save(){

      var data = {
         name: this.name,
         description: this.description,
         type: this.type
      };

      var request = {

         method: "POST",
         body: json(data)
      };

      this.http.fetch("", request).then(response => console.log(response));

   }

/*  heading = 'Github Users';
  sensores = [];*/

  constructor(http) {
    console.log("estoy en recursos");
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:3000/api/resources');
    });

    this.http = http;

  }

  attached() {

    $('#inventario-fecha-cultivo').datepicker({
         calendarWeeks: true,
         todayHighlight: true,
         toggleActive: true
    });

  }

  /*activate() {
    return this.http.fetch('')
      .then(response => response.json())
      .then(sensores => this.sensores = sensores);
  }*/
}
