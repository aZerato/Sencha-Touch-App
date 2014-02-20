Ext.define('sencha-touch-app.controller.contacts.List', {
    extend: 'Ext.app.Controller',
    require: [
        'sencha-touch-app.view.contacts.Navigation',
        'sencha-touch-app.view.contacts.List',
        'sencha-touch-app.view.contacts.Detail'
    ],

    config: {
        refs: {
            contactsNavigation: 'contactsNavigation',
            list: 'contactsList',
            contactDetail: 'contactDetail'
        },
        control: {
            list: {
                select: 'showDetail'
            }
        }
    },

    showDetail: function(dataview, index, target, record, e, options) {
        var self = this;
        var contactsNavigation = self.getContactsNavigation();

        var detailView = Ext.create('sencha-touch-app.view.contacts.Detail');
        detailView.setRecord(record);

        contactsNavigation.push(detailView);
    }
});
