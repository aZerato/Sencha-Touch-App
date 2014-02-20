Ext.define('sencha-touch-app.store.Contacts',{
	extend:'Ext.data.Store',
	requires: ['sencha-touch-app.model.Contact'],

	config:{
		// store model, you need to put the 'namespace' of your model
		model: 'sencha-touch-app.model.Contact',
		
		autoLoad: true,
		autoSync: true,

		// 
		proxy: {
			type: 'ajax',
			url: '/jsonData/contacts.json',
			reader: {
				type: 'json',
				// my json file start with { "contacts": [ {...}, {...}, ... ]}
				rootProperty: 'contacts'
			}
		}
	}
});