Ext.define('sencha-touch-app.view.contacts.Edit', {
    extend: 'Ext.form.Panel',

    xtype: 'contactEdit',
    id: 'contactEdit',

    config: {
    	// this property is required for being settable when you create the view (go : controller > contacts > List)
    	title: '',

        items: [{
                xtype: 'textfield',
                name: 'firstName',
                label: 'First Name'
            }, {
                xtype: 'textfield',
                name: 'lastName',
                label: 'Last Name'
            }
        ]
    }
});
