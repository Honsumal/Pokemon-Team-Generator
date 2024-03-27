const { Schema, model } = require('mongoose')
const Pokemon = require('./pokemon')

const teamSchema = new Schema({
    nickname: {
        type:String,
        required: true,
        unique: true,
        trim: true,
    },
    pk1: [Pokemon.schema],
    pk2: [Pokemon.schema],
    pk3: [Pokemon.schema],
    pk4: [Pokemon.schema],
    pk5: [Pokemon.schema],
    pk6: [Pokemon.schema],
});

const Team = model('Team', teamSchema);

module.exports = Team;