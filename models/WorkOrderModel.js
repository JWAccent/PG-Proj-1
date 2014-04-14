MyApp.models.WorkOrder = function() {

    var workOrders = [];

    this.initialize = function () {
    },

    this.getAllWorkOrders = function (useCache, callback) {        

        // could have an adapter factory...
        var adapter = new MyApp.adapters.RestAdapter();

        if (useCache && workOrders)
            callback(workOrders);
        else
            adapter.getAllWorkOrders(function (result) {
                workOrders = result;
                callback(workOrders);
            });
    }
};