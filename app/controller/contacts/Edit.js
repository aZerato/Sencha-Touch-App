Ext.define('sencha-touch-app.controller.contacts.Edit', {
    extend: 'Ext.app.Controller',
    require: [
    	'sencha-touch-app.view.contacts.Edit',
    	'sencha-touch-app.view.contacts.SubmitButton',
    	'sencha-touch-app.store.Contacts'
    ],

    config: {
    	refs: {
    		contactEdit: 'contactEdit',
    		contactSubmitButton: 'contactSubmitButton'
    	},
    	control: {
    		contactSubmitButton: {
    			tap: 'submitContact'
    		}
    	}
    },

    submitContact: function() {
    	var self = this;

    	var contactEdit = self.getContactEdit();

    	// Previous Data
    	var record = contactEdit.getRecord();

    	//New Data
    	var data = contactEdit.getValues();

		var contactsStore = Ext.getStore('Contacts');
		var storedContact = contactsStore.getById(record.data.id);  	

		// Update
		storedContact.set(data);
    }
});
