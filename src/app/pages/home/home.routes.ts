import HomeComponent from './home.component';

export const routing = ($stateProvider: angular.ui.IStateProvider) => {
  'ngInject';
  $stateProvider
    .state('home', {
      parent: 'app',
      url: '/home',
      component: HomeComponent.selector
    });
};
