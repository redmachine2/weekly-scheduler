/**
 * Created by Jason on 7/19/2016.
 */
module App {
    class HomeComponent {
        private name: string;
        constructor(){
            this.name = "John Doe";
            console.log(this.name);
        }
    }
    angular.module("app").controller("HomeComponent", HomeComponent);
}