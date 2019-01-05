Template.profile.rendered = function() {
    const inactiveLinks = [
        '#jokes-link',
        '#rankings-link',
        '#search-link',
        '#login-link'
    ]

    $('#profile-link').addClass('selected')
    inactiveLinks.forEach(link => $(link).removeClass('selected'))
}

Template.profile.helpers({
    email() {
        if (! Meteor.user()) {
            Bert.alert('You are not logged in, permission denied',
                'danger', 'growl-top-right')
                return false
        } else {
            return Meteor.user().emails[0].address
        }
    },

    username() {
        if (! Meteor.user()) {
            Bert.alert('You are not logged in, permission denied',
                'danger', 'growl-top-right')
                return false
        } else {
            return Meteor.user().username
        }
    }
})