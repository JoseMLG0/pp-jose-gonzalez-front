import LoginComponent from './login.component';

export const routing = ($stateProvider: angular.ui.IStateProvider) => {
  'ngInject';
  $stateProvider
    .state('login', {
      parent: 'app',
      url: '/login',
      component: LoginComponent.selector
    });
};
