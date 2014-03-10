Ext.define('sencha-touch-app.controller.contacts.Edit', {
    extend: 'Ext.app.Controller',
    require: [
        'sencha-touch-app.view.contacts.Navigation',
    	'sencha-touch-app.view.contacts.Edit',
        'sencha-touch-app.view.contacts.Detail',
    	'sencha-touch-app.store.Contacts'
    ],

    config: {
    	refs: {
            contactsNavigation: 'contactsNavigation',
    		contactEdit: 'contactEdit',
            contactDetail: 'contactDetail'
    	},
    	control: {
    		'contactEdit #submitEditContact': {
    			tap: 'submitContact'
    		},
            contactsNavigation: {
                back: 'backNavigation'
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

        var contactsNavigationBar = self.getContactsNavigation().getNavigationBar();
        contactsNavigationBar.setTitle(data.firstName);
    },

    backNavigation: function() {
        var self = this;

        var contactEdit = self.getContactEdit();

        if(contactEdit)
        {
           var contactsNavigationBar = self.getContactsNavigation().getNavigationBar();
           contactsNavigationBar.setTitle(contactEdit.getValues().firstName);
        }
    }
});
