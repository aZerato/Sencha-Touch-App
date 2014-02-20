Ext.define('sencha-touch-app.view.contacts.List', {
    extend: 'Ext.List',
    requires: ['sencha-touch-app.store.Contacts'],

    xtype: 'contactsList',
    
    config: {
        store: 'Contacts',
        itemTpl: '{firstName}'
    }
});
