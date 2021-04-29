app.define('AppMPS', function (require) {
    'use strict'
    var MPS = {
        $el: null,
        init: function () {
            this.$el = $()
            this.load_events();
            this._on_tab_click($('.gs-tab-link[g-tab-id="gs-products"]'));
        },
        load_events: function () {
            $('.gs-tab-link').click(event => this._on_tab_click($(event.target)));
            $('.gs-btn-open').click(event => this._on_record_open($(event.target)))
            $('.gs-btn-delete').click(event => this._on_record_delete($(event.target)))
        },
        _on_tab_click: function ($btn) {
            $('.gs-tab-link').removeClass('active');
            $btn.addClass('active');
            var url = $btn.attr('g-src');
            $('.gs-tab-content').hide();
            var $tab = $(`#${$btn.attr('g-tab-id')}`);
            
            if (url) {
                $.get(url, function (data) {
                    $tab.empty();
                    $tab.append($(data));   
                    $tab.show();
                })
            }
        },
        _on_record_open: function ($btn) {

        },
        _on_record_delete: function ($btn) {

        },
        _on_record_create: function ($btn) {

        }
    }
    return MPS;
})