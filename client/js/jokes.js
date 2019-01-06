import { Jokes } from '../../lib/collections/collections'

Template.jokes.rendered = function() {
    const inactiveLinks = [
        '#profile-link',
        '#rankings-link',
        '#search-link',
        '#login-link'
    ]

    $('#jokes-link').addClass('selected')
    inactiveLinks.forEach(link => $(link).removeClass('selected'))
}

Template.jokes.events({
    'click #laugh'(event) {
        Bert.alert('laugh', 'success', 'growl-top-right')
    },

    'click #frown'(event) {
        Bert.alert('frown', 'success', 'growl-top-right')
    },

    'click #puke'(event) {
        Bert.alert('puke', 'success', 'growl-top-right')
    }
})

Template.jokes.helpers({
    jokes() {
        const jokes = Jokes.find({}, { sort: { createdAt: -1 }})
        return jokes
    }
})