import { trimInput, isNotEmpty, isEmail, areValidPasswords }
    from '../../lib/methods/validation'

Template.signup.rendered = function() {
    
}

Template.signup.events({
    'submit .form-signup'(event) {
        event.preventDefault();
        const username = trimInput(event.target.username.value)
        const email = trimInput(event.target.email.value)
        const password = trimInput(event.target.password.value)
        const password2 = trimInput(event.target.password2.value)

        if (
            isNotEmpty(email) &&
            isNotEmpty(username) &&
            isNotEmpty(password) &&
            isEmail(email) &&
            areValidPasswords(password, password2)
        ) {
            Accounts.createUser({
                username,
                email,
                password,
                profile: {
                }
            }, function(err) {
                if (err) {
                    Bert.alert(err.reason, 'danger', 'growl-top-right')
                } else {
                    Bert.alert('Account created! Your now logged in.',
                    'success', 'growl-top-right')
                    Router.go('/jokes')
                }
            })
        }
    }
})