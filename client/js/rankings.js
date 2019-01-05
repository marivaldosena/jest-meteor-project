Template.rankings.rendered = function() {
    const inactiveLinks = [
        '#jokes-link',
        '#profile-link',
        '#search-link',
        '#login-link'
    ]

    $('#rankings-link').addClass('selected')
    inactiveLinks.forEach(link => $(link).removeClass('selected'))
}