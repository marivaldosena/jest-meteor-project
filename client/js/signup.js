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

// Validation Rules

// Trim Helpers
const trimInput = value => value.replace(/^\s*|\s*$/g, '')

const isNotEmpty = value => {
    if (value && value !== '') {
        return true
    }
    Bert.alert('Please fill in all fields', 'danger', 'growl-top-right')
    return false
}

const isEmail = value => {
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

    if (filter.test(value)) {
        return true
    }

    Bert.alert('Please use a valid email address', 'danger', 'growl-top-right')
    return false
}

const isValidPassword = password => {
    if (password.length < 6) {
        Bert.alert('Password must be at least 6 characters',
            'danger', 'growl-top-right')
        return false
    }

    return true
}

const areValidPasswords = (password, confirm) => {
    if (! isValidPassword(password)) {
        return false
    }

    if (password !== confirm) {
        Bert.alert('Passwords do not match', 'danger', 'growl-top-right')
    }

    return true
}