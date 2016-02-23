export class App {
  configureRouter(config, router) {
    config.title = 'JardinDelicias';
    config.map([
      { route: ['','main'], name: 'main', moduleId: './main', nav: true, title:'El Jardín de las Delicias' }
    ]);

    this.router = router;
  }
}
