(function() {
    'use strict';
    angular.module('material').controller('LoginController', LoginController);

    LoginController.$inject = ['$http','$scope', '$rootScope', '$location', 'APP_SETTINGS'];

    function LoginController($http, $scope, $rootScope, $location, APP_SETTINGS) {
        var controller = this;
        controller.logar = logar;
		controller.obterProdutos = obterProdutos;
		controller.obterProdutosAjax = obterProdutosAjax;
		
		function obterProdutosAjax(){
			$http.get(
			APP_SETTINGS.PRODUTOS_URL)
			.success(function(data, status, headers, config) {
				concole.log(data);
			    controller.products = data;
			}) 
			.error(function(data, status, headers, config) {
 				controller.token = "Falha ao buscar os Produtos";
			}) 
		}
		function obterProdutos(){
			
		}
		
		function logar(){
			$http.post(
			APP_SETTINGS.OAUTH_URL,
			"grant_type=password",
			{
				headers: {
					'Content-Type' : 'application/www-form-urlencoded'
				}
			})
			.success(function(data, status, headers, config) {
			    controller.token = data.acess_token;
			}) 
			.error(function(data, status, headers, config) {
 				controller.token = "Falha ao realizar a Autorização";
			}) 
		}
    }
})();
