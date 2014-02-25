Ext.define('sencha-touch-app.model.Contact', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{ name: 'firstName', type: 'string' },
			{ name: 'lastName', type: 'string' },
			{ name: 'contactno', type: 'string' },
			{ name: 'address', type: 'string' }
        ],

		// It's best to put proxy in the model
		proxy: {
			type: 'ajax',
			url: '/jsonData/contacts.json',
			reader: {
				type: 'json',
				// my json file start with { "contacts": [ {...}, {...}, ... ]}
				rootProperty: 'contacts'
			},
			writer: {
				type: 'json',
				rootProperty: 'contacts',
				encode: true,
				writeAllFields: true
			}
		}
    }
});