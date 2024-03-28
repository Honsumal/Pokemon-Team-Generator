const { Schema, model } = require('mongoose')
const Pokemon = require('./pokemon')

const teamSchema = new Schema({
    nickname: {
        type:String,
        required: true,
        unique: true,
    },
    pokemon: [Pokemon.schema],

});

const Team = model('Team', teamSchema);

module.exports = Team;