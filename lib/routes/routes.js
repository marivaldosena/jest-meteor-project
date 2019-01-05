Router.configure({
    layoutTemplate: 'main_layout'
})

Router.route('/', function() {
    this.render('jokes')
})