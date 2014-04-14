MyApp.home = function (params) {

	alert("loading");
    var workOrder = new MyApp.models.WorkOrder();
     
    workOrder.getAllWorkOrders(false, function (workOrders) {
        alert(workOrders.length + ' work order(s) found');
    });

    var viewModel = {
//  Put the binding properties here
    };

    return viewModel;
};