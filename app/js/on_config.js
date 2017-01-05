function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider
      .state('home', {
          url: '/',
          controller: 'HomeCtrl as home',
          templateUrl: 'home.html',
          title: 'Home'
      })
      .state('projects', {
          url: '/projects',
          controller: 'ProjectCtrl as projects',
          templateUrl: 'projects.html',
          title: 'Projects',
      })
      .state('blog', {
          url: '/blog',
          controller: 'BlogCtrl as blog',
          templateUrl: 'blog.html',
          title: 'Blog'
      })
      .state('gallery', {
          url: '/gallery',
          controller: 'GalleryCtrl as gallery',
          templateUrl: 'gallery.html',
          title: 'Gallery'
      });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
