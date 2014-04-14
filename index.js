(function() {
    "use strict";

    var MyApp = window.MyApp = { 
      adapters: {},

      settings: {
       endpoint : 'http://localhost:60189/api/'
      },

      showAlert: function (message, title) {
          if (navigator.notification) {
              navigator.notification.alert(message, null, title, 'OK');
          } else {
              alert(title ? (title + ": " + message) : message);
          }
      },

    };

    MyApp.showAlert('Hey', 'hey');

    DevExpress.devices.current({ platform: "generic" });

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
        
        MyApp.app.router.register(":view", { view: "home" });
        MyApp.app.navigate();
    });

})();