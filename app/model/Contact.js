Ext.define('sencha-touch-app.model.Contact', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{ name: 'firstName', type: 'string' },
			{ name: 'lastName', type: 'string' },
			{ name: 'contactno', type: 'string' },
			{ name: 'address', type: 'string' }
        ]
    }
});