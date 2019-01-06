import { trimInput, isNotEmpty } from '../../lib/methods/validation'

Template.jokeForm.rendered = function() {

}

Template.jokeForm.events({
    'submit .joke-post'(event) {
        event.preventDefault()

        const jokeName = trimInput(event.target.jokeName.value)
        const jokePost = trimInput(event.target.jokePost.value)

        if (
            isNotEmpty(jokeName) &&
            isNotEmpty(jokePost)
        ) {
            Meteor.call('jokes.insert', jokeName, jokePost)

            event.target.jokeName.value = ''
            event.target.jokePost.value = ''

            Bert.alert('Your joke was posted', 'success', 'growl-top-right')
        } else {
            Bert.alert('Something went wrong', 'danger', 'growl-top-right')
        }
    }
})