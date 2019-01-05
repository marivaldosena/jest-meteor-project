Template.sidebar.rendered = function() {

}

Template.sidebar.events({
    'click .logout'(event) {
        Meteor.logout(err => {
            if (err) {
                Bert.alert(err.reason, 'danger', 'growl-top-right')
            } else {
                Router.go('/')
                Bert.alert('You are now logged out', 'success', 'growl-top-right')
            }
        })
    }
})