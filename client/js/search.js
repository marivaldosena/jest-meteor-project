Template.search.rendered = function() {
    const inactiveLinks = [
        '#jokes-link',
        '#rankings-link',
        '#profile-link',
        '#login-link'
    ]

    $('#search-link').addClass('selected')
    inactiveLinks.forEach(link => $(link).removeClass('selected'))
}