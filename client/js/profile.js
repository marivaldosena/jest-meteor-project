import { Jokes } from '../../lib/collections/collections'

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
    },

    userJokes() {
        const username = Meteor.user().username
        const userId = Meteor.userId()
        const userJokes = Jokes.find({ userId },
            { sort: { createdAt: -1 }})

        return userJokes
    }
})

Template.profile.events({
    'click #delete-joke'() {
        Meteor.call('jokes.remove', this)
        Bert.alert('Your joke was deleted', 'success', 'growl-top-right')
    }
})