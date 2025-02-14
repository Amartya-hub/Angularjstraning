var MyController = /** @class */ (function () {
    function MyController($scope) {
        this.$scope = $scope;
        this.message = 'Welcome to Transflower TypeScript!';
        this.users = [
            { name: 'Amartya Kaushik', email: 'amartyakaushik044@gmail.com' },
            { name: 'Sameer Patil', email: 'sameer.patil@gmail.com' },
            { name: 'Manisha Pant', email: 'manisha.pant@gmail.com' }
        ];
        $scope['vm'] = this;
    }
    MyController.$inject = ['$scope'];
    return MyController;
}());
export { MyController };
//angular.module('myApp').controller('MyController', MyController);
