function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'ExampleCtrl as home',
    templateUrl: 'home.html',
    title: 'Home'
  }).state('Projects', {
      url: '/projects',
      controller: 'ExampleCtrl as home',
      templateUrl: 'projects.html',
      title: 'Projects'
  }).state('Blog', {
      url: '/blog',
      controller: 'ExampleCtrl as blog',
      templateUrl: 'blog.html',
      title: 'Blog'
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
