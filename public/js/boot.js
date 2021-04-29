var app = {
    modules: {},
    define: function (name, solve) {
        if (this.modules[name] !== undefined) {
            console.log(`You have defined ${name} module already`)
        } else {
            this.modules[name] = solve(this.require);
        }
    },
    require: function (name) {
        return app.modules[name];
    }
};

$(document).ready(function () {
    console.log('Green System is Ready!')
    var menu = app.require('AppMenus');
    menu.init()
});
