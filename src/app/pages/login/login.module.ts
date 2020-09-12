import * as angular from 'angular';
import LoginComponent from './login.component';
import { routing } from './login.routes';

export default angular.module('app.login', ['ui.router']).component(LoginComponent.selector, LoginComponent).config(routing);

