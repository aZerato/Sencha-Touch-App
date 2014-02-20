Ext.define('sencha-touch-app.view.contacts.Navigation', {
    extend: 'Ext.navigation.View',

    xtype: 'contactsNavigation',

    config: {
		items: [
			{
				docked: 'top',
                xtype: 'titlebar',
                title: 'Contacts'
			},{
				xtype: 'contactsList'
			}
		]
    }
});
