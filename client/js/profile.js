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

Template.profile.events({

})