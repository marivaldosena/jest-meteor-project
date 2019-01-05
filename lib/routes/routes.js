Router.configure({
    layoutTemplate: 'main_layout'
})

Router.map(function() {
    this.route('jokes', {
        path: '/jokes',
        template: 'jokes'
    })

    this.route('login', {
        path: ['/login', '/'],
        template: 'login'
    })

    this.route('signup', {
        path: '/signup',
        template: 'signup'
    })
})