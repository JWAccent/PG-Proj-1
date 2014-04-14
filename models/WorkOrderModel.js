
app.models.WorkOrder = function() {

    var workOrders = [];

    this.initialize = function () {
        //this.reports = new app.models.ReportsCollection();
        //this.reports.parent = this; 
    },

    this.getAllWorkOrders = function (useCache, callback) {        

        // could have an adapter factory...
        var adapter = new app.adapters.RestAdapter();

        if (useCache && workOrders)
            callback(workOrders);
        else
            adapter.getAllWorkOrders(function (result) {
                workOrders = result;
                callback(workOrders);
            });
    }

};