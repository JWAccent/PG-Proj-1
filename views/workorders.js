MyApp.workorders = function (params) {      
        
    var workOrder = new MyApp.models.WorkOrder;
 	var works;
    workOrder.getAllWorkOrders(false, function (workOrders) {
    	works = workOrders;
    	alert(works[0].Id)
    	alert(works[0].WorkOrderId)
    });


    var viewModel = {
       	dataSource: new DevExpress.data.DataSource({
            load: function(loadOptions) {
                return $.getJSON(MyApp.settings.endpoint + 'workorders');
            },
            map: function(item) {
                return {
                    id: item.Id,
                    name: item.WorkOrderId
                };
            }                
        })
    };

    return viewModel;
};