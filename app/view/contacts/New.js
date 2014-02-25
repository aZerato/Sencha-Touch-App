Ext.define('sencha-touch-app.view.contacts.New', {
    extend: 'Ext.form.Panel',

    xtype: 'contactNew',
    id: 'contactNew',

    config: {
    	title: 'New Contact',

        items: [
            {
                xtype: 'textfield',
                name: 'firstName',
                label: 'First Name'
            }, {
                xtype: 'textfield',
                name: 'lastName',
                label: 'Last Name'
            }, {
                xtype: 'textfield',
                name: 'contactno',
                label: 'Contact Number'
            }, {
                xtype: 'textfield',
                name: 'address',
                label: 'Address'
            }, {
                xtype: 'contactSubmitButton'
            }
        ]
    }
});
