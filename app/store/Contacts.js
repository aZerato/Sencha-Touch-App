Ext.define('sencha-touch-app.store.Contacts',{
	extend:'Ext.data.Store',
	requires: ['sencha-touch-app.model.Contact'],

	config:{
		// store model, you need to put the 'namespace' of your model
		model: 'sencha-touch-app.model.Contact',
		
		autoLoad: true
	}
});