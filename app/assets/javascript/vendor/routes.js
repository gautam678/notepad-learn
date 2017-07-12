angular.module('NoteWrangler').config(function($routeProvider){
    $routeProvider.when('/',{
        redirectTo: "/notes"
    })
    .when('/notes',{
        templateUrl: "assets/templates/notes/index.html",
        controller: "NotesIndexController"
    })
});