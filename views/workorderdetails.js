MyApp.workorderdetails = function (params) {      
        
	var viewModel = {
        id: params.id,
        name: ko.observable('')
    };
    
    return viewModel;
};