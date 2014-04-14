(function() {
    "use strict";

    var MyApp = window.MyApp = { 
      adapters: {},
      models: {},

      settings: {
       endpoint : 'http://client.varasset.com/mxamservice/api/'
      },

      showAlert: function (message, title) {
          if (navigator.notification) {
              navigator.notification.alert(message, null, title, 'OK');
          } else {
              alert(title ? (title + ": " + message) : message);
          }
      },

    };

    $(function() {
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,
            
            navigationType: "slideout",
            navigation: [
              {
                title: "Home",
                action: "#home",
                icon: "home"
              },
              {
                title: "Work Orders",
                action: "#workorders",
                icon: "box"
              },
              {
                title: "Search",
                action: "#search",
                icon: "find"
              },
              {
                title: "Settings",
                action: "#settings",
                icon: "toolbox"
              },
            ]
        });
        
        MyApp.app.router.register(":view/:id", { view: "home", id: undefined });
        MyApp.app.navigate();
    });

})();