authmodule.controller("loginController", function($scope) {
    $scope.user = {
        email: "Amartya@gmail.com",
        password: "admin"
    }
    
    $scope.users=[
        {
            email: "AmartyaK@gmail.com",
            password: "admin"
        },
        {
            email: "test@gmail.com",
            password: "admin"
        },
        {
            email: "john@gmail.com",
            password: "admin"
        },
        {
            email: "user1@gmail.com",
            password: "admin"
        }
    ];
    $scope.onValidate = () => {
        if($scope.user){
            console.log("Welcome");
        } else {
            console.log("Invalid User!");
        }
    }
})