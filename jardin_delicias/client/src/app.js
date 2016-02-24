export class App {
  configureRouter(config, router) {
    config.title = 'JardinDelicias';
    config.map([
      { route: ['','main'], name: 'main', moduleId: './main', nav: true, title:'El Jardín de las Delicias' },
      { route: ['sensores'], name: 'sensores', moduleId: './sensores', nav: true, title:'Los Sensores' },
      { route: ['recursos'], name: 'recursos', moduleId: './recursos', nav: true, title:'Los Recursos' }
    ]);

    this.router = router;
  }
}
