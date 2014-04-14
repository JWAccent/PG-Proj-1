MyApp.adapters.RestAdapter = function () {

    var serviceUrl = MyApp.settings.endpoint + 'workorders';

    this.getAllWorkOrders = function (callback) {

        var workOrders = [];

        $.getJSON(serviceUrl)
            .done(function (data) {
                $.each(data, function (key, wo) {
                    workOrders.push(wo);
                });

                callback(workOrders);
            })
            .error(function (e) {
                console.log(e);
            }).fail(function (e) {
                console.log(e);
            });
    }
};