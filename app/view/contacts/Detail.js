Ext.define('sencha-touch-app.view.contacts.Detail', {
    extend: 'Ext.form.Panel',
    requires: ['sencha-touch-app.store.Contacts'],

    xtype: 'contactDetail',
    id: 'contactDetail',

    config: {
        title: '{lastName}'
    }
});
