import {Router} from 'aurelia-router';

export class App {
   static inject() { return [Router];}
   constructor(router) {

      this.router = router;
      this.router.configure(config => {
         config.title = 'Jardin de las Delicias';
         config.map([
            { route: ['','main'], name: 'main', moduleId: 'main', nav: false, title:'El Jardín de las Delicias' },
            { route: 'sensores', name: 'sensores', moduleId: 'sensores', nav: true, title:'sensores' },
            { route: 'recursos', name: 'recursos', moduleId: 'recursos', nav: true ,title:'recursos'},
//            { route: 'carrusel', name: 'carrusel', moduleId: 'carrusel', nav: false, title:'carrusel' },
         ]);
      });
   }
}
