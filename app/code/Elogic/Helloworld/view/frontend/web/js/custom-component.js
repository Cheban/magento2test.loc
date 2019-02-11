define(['jquery', 'uiComponent','mage/validation', 'ko'], function ($, Component, validation, ko) {
        'use strict';
        return Component.extend({
            defaults: {
                template: 'Elogic_Helloworld/knockout-test'
            },
            initialize: function () {
                this.customerName = ko.observableArray([]);
                this.customerSecondName = ko.observableArray([]);
                this.customerEmail = ko.observableArray([]);
                this.customerEmailData = ko.observable('');
                this.customerNameData = ko.observable('');
                this.customerSecondNameData = ko.observable('');
                this._super();
            },

            addNewCustomer: function () {
                this.customerName.push({name:this.customerNameData()});
                this.customerSecondName.push({secondname:this.customerSecondNameData()});
                this.customerEmail.push({email:this.customerEmailData()});
                this.customerNameData('');
                this.customerEmailData('');
                this.customerSecondNameData('');
            }
        });
    }
);