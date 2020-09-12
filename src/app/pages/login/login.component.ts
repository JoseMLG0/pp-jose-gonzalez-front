import { IHttpService } from 'angular';
import './login.component.scss';

class LoginController {
    static $inject = ['$http', '$state'];

    error: string;
    username: string;
    password: string;

    constructor(
        private $http: IHttpService,
        private $state: angular.ui.IStateService
    ) {
        'ngInject';
        if (!!localStorage.getItem('token')) {
            this.$state.go('home');
        }
    }

    login() {
        const username = this.username;
        const password = this.password;
        this.$http.post('http://127.0.0.1:5560/auth', { username: username, password: password }).then((r: any) => {
            this.error = null;
            localStorage.setItem('token', r.data.token);
            if (!!localStorage.getItem('token')) {
                this.$state.go('home');
            }
        }).catch(e => {
            this.error = e.data;
        });
    }
}

export default class LoginComponent implements angular.IComponentOptions {
    static selector = 'login';
    static controller = LoginController;
    static template = require('./login.component.html');
}
