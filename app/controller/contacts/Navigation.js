Ext.define('sencha-touch-app.controller.contacts.Navigation', {
    extend: 'Ext.app.Controller',
    require: ['sencha-touch-app.view.contacts.Navigation'],

    config: {
    	refs: {
    		contactsNavigation: 'contactsNavigation'
    	},
    	control: {
    		contactsNavigation: {
    			push: 'onNavigationPush',
                back: 'onNavigationBack'
    		}
    	}
    },

    onNavigationPush: function(view, item) {
    	console.log('push');
    },

    onNavigationBack: function(view, item) {
        console.log('back');
    }
});
