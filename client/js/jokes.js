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