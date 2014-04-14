MyApp.workorders = function (params) {      
        
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