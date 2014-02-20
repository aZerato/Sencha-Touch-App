Ext.define('sencha-touch-app.store.Contacts',{
	extend:'Ext.data.Store',
	requires: ['sencha-touch-app.model.Contact'],

	config:{
		
		model: 'sencha-touch-app.model.Contact',
		
		autoLoad: true,
		autoSync: true,

		proxy: {
			type: 'ajax',
			url: '/jsonData/contacts.json',
			reader: {
				type: 'json',
				rootProperty: 'contacts'
			}
		}
	}
});