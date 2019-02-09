define(['jquery', 'uiComponent', 'ko'], function ($, Component, ko) {
        'use strict';
        return Component.extend({
            defaults: {
                template: 'Elogic_Helloworld/knockout-test'
            },
            initialize: function () {
                this.customerName = ko.observableArray([]);
                this.customerSecondName = ko.observableArray([]);
                this.customerNameData = ko.observable('');
                this.customerSecondNameData = ko.observable('');
                this._super();
            },

            addNewCustomer: function () {
                this.customerName.push({name:this.customerNameData()});
                this.customerSecondName.push({secondname:this.customerSecondNameData()});
                this.customerNameData('');
                this.customerSecondNameData('');
            }
        });
    }
);