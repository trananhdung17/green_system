app.define('AppMenus', function (require) {
    'use strict'
    var Menu = {
        init: function () {
            var $body = $('.gs-body');
            $('.gs-menu-item').click((event) => {
                var url = $(event.target).attr('t-href');
                $.get(url, function (data) {
                    $body.empty();
                    $body.append($(data));
                    var controller = $(event.target).attr('t-controller');
                    require(controller).init();
                })
            })
        }
    }
    return Menu;
})
