import * as angular from 'angular';
import HomeComponent from './home.component';
import { routing } from './home.routes';

export default angular.module('app.home', ['ui.router']).component(HomeComponent.selector, HomeComponent).config(routing);
