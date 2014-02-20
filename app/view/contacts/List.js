Ext.define('sencha-touch-app.view.contacts.List', {
    // Heritage
    extend: 'Ext.List',

    // Dependency
    requires: ['sencha-touch-app.store.Contacts'],

    // This was becomming a type/template, i can reuseit really easy with :
    xtype: 'contactsList',
    
    config: {
    	// i'm define store that use this view
        store: 'Contacts',
        // a html template like mustach / handlebars
        itemTpl: '{firstName}'
    }
});
