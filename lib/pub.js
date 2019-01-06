import { Jokes } from '../lib/collections/collections'
import '../lib/methods/methods'

if (Meteor.isServer) {
    Meteor.publish('jokes', function () {
        return Jokes.find({})
    })
}