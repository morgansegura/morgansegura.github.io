import angular from 'angular';

// angular modules
import constants from './app/constants';
import onConfig  from './app/on_config';
import onRun     from './app/on_run';
import 'angular-ui-router';
import './app/templates';
import './app/filters';
import './app/controllers';
import './app/services';
import './app/directives';

// create and bootstrap application
const requires = [
  'ui.router',
  'templates',
  'app.filters',
  'app.controllers',
  'app.services',
  'app.directives'
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', constants);

angular.module('app').config(onConfig);

angular.module('app').run(onRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
