import { Jokes } from '../collections/collections'

Meteor.methods({
    // Add Joke
    'jokes.insert'(jokeName, jokePost) {
        if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized')
        } else {
            const username = Meteor.user().username
            const year = new Date().getFullYear()
            const month = new Date().getMonth() + 1
            const day = new Date().getDate()
            const date = (`${day}/${month}/${year}`).toString()

            Jokes.insert({
                jokeName,
                jokePost,
                author: username,
                date,
                createdAt: new Date(),
                laughScore: 0,
                frownScore: 0,
                pukeScore: 0,
                voted: [username],
                userId: Meteor.userId()
            })
        }
    }
})