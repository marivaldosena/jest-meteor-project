Tracker.autorun(function() {
    if (Meteor.userId()) {
        Router.go('/jokes')
    }
})

import { trimInput, isNotEmpty, isEmail, isValidPassword }
    from '../../lib/methods/validation'

Template.login.rendered = function() {
}

Template.login.events({
    'submit .form-signin'(event) {
        event.preventDefault()

        const email = trimInput(event.target.email.value)
        const password = trimInput(event.target.password.value)

        if (
            isNotEmpty(email) &&
            isNotEmpty(password) &&
            isEmail(email) &&
            isValidPassword(password)
        ) {
            Meteor.loginWithPassword(email, password, err => {
                if (err) {
                    Bert.alert(err.reason, 'danger', 'growl-top-right')
                    return false
                } else {
                    Router.go('/jokes')
                    Bert.alert('You are now logged in', 'success', 'growl-top-right')
                }
            })
        }
    }   
})