
import { IHttpService } from 'angular';
import './app.component.scss';

export class App implements angular.IComponentOptions {
    static selector = 'app';
    static template = require('./app.component.html');
}
