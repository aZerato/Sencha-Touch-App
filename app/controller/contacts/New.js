Ext.define('sencha-touch-app.controller.contacts.New', {
    extend: 'Ext.app.Controller',
    require: [
        'sencha-touch-app.view.contacts.New',
        'sencha-touch-app.store.Contacts'
    ],

    config: {
        refs: {
            contactNew: 'contactNew'
        },
        control: {
            'contactNew #submitNewContact': {
                tap: 'submitContact'
            }
        }
    },

    submitContact: function() {
        var self = this;

        var contactNew = self.getContactNew();

        //New Data
        var data = contactNew.getValues();

        var contactsStore = Ext.getStore('Contacts');

        contactsStore.add(data);
    }
});
