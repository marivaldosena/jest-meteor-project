// Validation Rules and Helpers
export const trimInput = value => value.replace(/^\s*|\s*$/g, '')

export const isNotEmpty = value => {
    if (value && value !== '') {
        return true
    }
    Bert.alert('Please fill in all fields', 'danger', 'growl-top-right')
    return false
}

export const isEmail = value => {
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

    if (filter.test(value)) {
        return true
    }

    Bert.alert('Please use a valid email address', 'danger', 'growl-top-right')
    return false
}

export const isValidPassword = password => {
    if (password.length < 6) {
        Bert.alert('Password must be at least 6 characters',
            'danger', 'growl-top-right')
        return false
    }

    return true
}

export const areValidPasswords = (password, confirm) => {
    if (! isValidPassword(password)) {
        return false
    }

    if (password !== confirm) {
        Bert.alert('Passwords do not match', 'danger', 'growl-top-right')
    }

    return true
}