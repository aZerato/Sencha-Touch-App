Ext.define('sencha-touch-app.controller.contacts.Detail', {
    extend: 'Ext.app.Controller',
    require: [
    	'sencha-touch-app.view.contacts.Detail',
		'sencha-touch-app.view.contacts.Navigation',
		'sencha-touch-app.view.contacts.EditButton',
		'sencha-touch-app.view.contacts.Edit'
    ],

    config: {
    	refs: {
    		contactsNavigation: 'contactsNavigation',
    		contactDetail: 'contactDetail',
    		contactEditButton: 'contactEditButton',
    		contactEdit: 'contactEdit'
    	},
    	control: {
    		contactDetail: {
    			show: 'createEditButton',
    			hide: 'removeEditButton'
    		},
    		contactEditButton: {
    			tap: 'editContact'
    		}
    	}
    },


    createEditButton: function(view, item) {
        var self = this;

    	var contactsNavigation = self.getContactsNavigation();
		
		var editBtn = Ext.create('sencha-touch-app.view.contacts.EditButton');
    	
    	contactsNavigation.getNavigationBar().add(editBtn);
    },

	removeEditButton: function(view, item) {
		var self = this;
		// control that edit btn exist
		if(self.getContactEditButton()) 
        {
			self.getContactEditButton().destroy();
		}
    },
	
    editContact: function(dataview, index, target, record, e, options) {
        var self = this;

        var contactsNavigation = self.getContactsNavigation();

        var contactDetail = self.getContactDetail();

        var record = contactDetail.getRecord();
        var data = contactDetail.getData();

        var editView = Ext.create('sencha-touch-app.view.contacts.Edit');

        editView.setTitle(data.firstName);

        // load data in form
        editView.setRecord(record);

        contactsNavigation.push(editView);
    }
});
