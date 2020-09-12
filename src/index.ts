import './index.scss';
import 'core-js';
import 'moment';
import '@uirouter/angularjs';
import 'angular-storage';
import 'angular-moment';
import * as angular from 'angular';
import appModule from './app/app.module';

angular.module('packpack', [
    'ui.router',
    'angularMoment',
    appModule.name
]).run(function (amMoment: any) {
    amMoment.changeLocale('es');
}).config(function ($httpProvider: angular.IHttpProvider) {
    $httpProvider.interceptors.push('HttpInterceptor');
}).factory('HttpInterceptor', function ($q: any) {
    const request = function request(config: any) {
        if (!!localStorage.getItem('token')) {
            config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
        }
        return config;
    };
    const responseError = function (response: any) {
        if (response.status === 401) {
            localStorage.removeItem('token');
        }
        return $q.reject(response);
    };

    return {
        request: request,
        responseError: responseError
    };
});
