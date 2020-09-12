import './home.component.scss';
import { IHttpService } from 'angular';

class HomeController {
    static $inject = ['$http', '$state'];
    newUser: any = {
        name: null,
        user: null,
        password: null,
        email: null,
        phone: null,
        age: null,
        gender: 'H',
        hobby: null
    };
    filterUser: any = {
        user: null,
        hobby: null
    };
    users: any[];
    error: string;

    constructor(
        private $http: IHttpService,
        private $state: angular.ui.IStateService
    ) {
        'ngInject';
        if (!localStorage.getItem('token')) {
            this.$state.go('login');
        }

        this.getUsers();
    }

    addUser() {
        this.$http.post('http://127.0.0.1:5560/api/new/user', this.newUser).then((r: any) => {
            this.error = null;
            this.users.push(r.data.user);
        }).catch(e => {
            this.error = e.data;
        });
    }

    filterUsers() {
        const query: any = {};
        if (!!this.filterUser.user) {
            query.user = this.filterUser.user;
        }
        if (!!this.filterUser.hobby) {
            query.hobby = this.filterUser.hobby;
        }
        this.getUsers(query);
    }

    getUsers(filter: any = {}) {
        this.$http.get('http://127.0.0.1:5560/api/get/user', { params: filter }).then((r: any) => {
            this.users = r.data;
        }).catch(e => {
            console.log(e);
        });
    }

    delete(user: string) {
        this.$http.delete('http://127.0.0.1:5560/api/user', { params: { id: user } }).then((r: any) => {
            if (r.data) {
                const index = this.users.findIndex(f => f._id === user);
                if (index !== -1) {
                    this.users.splice(index, 1);
                }
            }
        }).catch(e => {
            console.log(e);
        });
    }

    logout() {
        localStorage.removeItem('token');
        if (!localStorage.getItem('token')) {
            this.$state.go('login');
        }
    }

}

export default class HomeComponent implements angular.IComponentOptions {
    static selector = 'home';
    static controller = HomeController;
    static template = require('./home.component.html');

    constructor() {
        console.log('test');
    }
}
