(function () {
	angular.module('app')
		.config(config);

	/* @ngInject */
	function config($stateProvider) {

        const dashboardApp = {
            name: 'dashboardApp',
            url: '/dashboard-app',
            templateUrl: '../app/views/dashboard/dashboard.html'
        };


		$stateProvider
    		.state('dashboardApp', dashboardApp);

	}
})();