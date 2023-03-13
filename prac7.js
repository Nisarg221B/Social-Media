var app = angular.module('app', []);
app.controller('PostsCtrl', function ($scope) {
    $scope.addPost = function () {
        if ($scope.title) {
            $scope.posts.unshift({
                username:$scope.username,
                title:$scope.title,
                comment:$scope.comment, 
            })
            console.log("username = "+$scope.username)
            console.log("title = "+$scope.title);
            $scope.title = null;
            $scope.comment = null;
            console.log($scope.posts);
            $scope.message = null;
        }
        else{
            $scope.message = "Please enter title"
        }
    }
    $scope.deletepost = function(post) {
        var index = $scope.posts.indexOf(post);
        $scope.posts.splice(index, 1);   
        }
    $scope.notlogged  = true;
    $scope.login = function(){
        for(u in $scope.users){
            console.log($scope.users[u].username);
            if($scope.users[u].username == $scope.username && $scope.users[u].password==$scope.password){
                $scope.notlogged = false;
                return
            }
        }
        $scope.message = "incorrect password or username"
    }
    $scope.logout = function(){
        $scope.notlogged = true;
        $scope.username = null;
        $scope.password = null;
        $scope.message = null;
    }
    $scope.searchbar = true;
    $scope.search = function(){
         $scope.searchbar = false;
    }
    $scope.register = function(){
        for(u in $scope.users){
            if($scope.users[u].username == $scope.username){
                $scope.message = "username already taken"
                return
            }
        }
        $scope.users.unshift({
            username:$scope.username,
            password:$scope.password
        })
        $scope.username = null;
        $scope.password = null;
        $scope.message = "registered"
    }
    $scope.users = [
        {
            username:'Nisarg',
            password:'Hello2'
        }
    ]
    $scope.posts = [
        {
            username: 'dickeyxxx',
            title: 'Node rules!',
            comment: 'Node-rules is a light weight forward chaining Rule Engine, written in JavaScript for both browser and node.js environments',
        },
        {
            username: 'jeffdickey',
            title: 'trying out angular.js...',
            comment: "As you expand your tests, keep an eye out for locations where you can use beforeEach to tidy up tests. beforeEach isn't the only function of this sort that Jasmine",
        }
    ]
})