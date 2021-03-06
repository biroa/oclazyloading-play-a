angular.module("demo", ["ui.router","oc.lazyLoad"])
    .config(function($stateProvider){
	$stateProvider.state('/',{
		templateUrl: "hore.html",
		controller: "HoreCtrl as hore",
		resolve:{
			store:function($ocLazyLoad){
				return $ocLazyLoad.load(
				{
					name:"hore",
					files:["hore.js"]
				})
			}
		}
	})
    
    })
    .controller("AppCtrl", function ($injector, $ocLazyLoad, $state) {
        var app = this;
	//we can load it when controller is initialized
	$state.go("/");
        app.click = function () {
		$state.go("/");
            $ocLazyLoad.load({
                name: "store",
                files: [
                    "store.js","style.css"
                ]
            }).then(function () {
                console.log($injector.get("cart"));
            })

        }
    })