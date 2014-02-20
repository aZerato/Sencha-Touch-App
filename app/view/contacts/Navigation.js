/*
	A navigation can use 'push' fonction
	you can put other type of view in it (like : Panel, List, ...)

	I create this navigation view, i'm use a list, and when i'm clicking on one of item list
	I open a detailed view (thanks to 'push' fonction)
*/
Ext.define('sencha-touch-app.view.contacts.Navigation', {
    // Heritage
    extend: 'Ext.navigation.View',

    xtype: 'contactsNavigation',

    config: {

    	// Composition of view
		items: [
			{
				docked: 'top',
                xtype: 'titlebar',
                title: 'Contacts'
			},{
				// i'm define that second part of the view is an contractsList view
				xtype: 'contactsList'
			}
		]
    }
});
