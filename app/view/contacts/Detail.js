Ext.define('sencha-touch-app.view.contacts.Detail', {
    extend: 'Ext.Panel',
    requires: ['sencha-touch-app.store.Contacts'],

    xtype: 'contactDetail',
    id: 'contactDetail',

    config: {
    	// this property is required for being settable when you create the view (go : controller > contacts > List)
    	title: '',
    	// Data show
        tpl: [
        	'{lastName} {firstName}'
        ]
    }
});
