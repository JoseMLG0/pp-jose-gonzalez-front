import * as angular from 'angular';
import { routing } from './app.routes';
import { App } from './app.component';
import homeModule from './pages/home/home.module';
import loginModule from './pages/login/login.module';

export default angular.module('app', [
    'ui.router',
    homeModule.name,
    loginModule.name,
])
    .component(App.selector, App)
    .config(($locationProvider: angular.ILocationProvider) => {
        'ngInject';
        $locationProvider.hashPrefix('');
    }).config(routing);
