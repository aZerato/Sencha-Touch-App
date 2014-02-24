Ext.define('sencha-touch-app.controller.contacts.List', {
    extend: 'Ext.app.Controller',
    require: [
        'sencha-touch-app.view.contacts.Navigation',
        'sencha-touch-app.view.contacts.List',
        'sencha-touch-app.view.contacts.Detail'
    ],

    config: {
        refs: {
            // referencies
            contactsNavigation: 'contactsNavigation',
            list: 'contactsList',
            contactDetail: 'contactDetail'
        },
        // fonctions / actions
        control: {
            list: {
                itemtap: 'showDetail'
            }
        }
    },

    showDetail: function(dataview, index, target, record, e, options) {
        var self = this;
        // self.getContactsNavigation() is autogenerated when i refer xtype contactsNavigation
        var contactsNavigation = self.getContactsNavigation();

        // I'm create a new view
        var detailView = Ext.create('sencha-touch-app.view.contacts.Detail');

        // Pass data
        detailView.setRecord(record);
        var data = record.getData();
        detailView.setData(data);

        // You need to add property 'title' in the view for being settable
        detailView.setTitle(data.firstName);

        // push the new detail View
        contactsNavigation.push(detailView);
    }
});
