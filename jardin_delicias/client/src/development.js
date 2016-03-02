import { bootstrap } from 'aurelia-bootstrapper';

bootstrap(aurelia => {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css');

  aurelia.start().then(a => a.setRoot("app", document.body))
  //  aurelia.start().then(() => aurelia.setRoot());
});
