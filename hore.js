angular.module("hore", [{
    name: "cart",
    files: ["cart.js"]
}])
    .controller("HoreCtrl", function (list) {
        var store = this;
        store.message = list.items
	console.log(store.message);
    })