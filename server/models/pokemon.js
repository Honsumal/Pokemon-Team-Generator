const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const pokemonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    ability: {
        type: String,
        required: true
    },
    move1: {
        type: String,
        required: true
    },
    move2: {
        type: String
    },
    move3: {
        type: String
    },
    move4: {
        type: String
    },
    item: {
        type: String
    },
    nature: {
        type: String,
        required: true,
        default: 'serious'
    },
    hpEV: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    atkEV: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    defEV: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    spaEV: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    spdefEV: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    spdEV: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    tera: {
        type: String
    }    
});

const Pokemon = model('Pokemon', pokemonSchema);

module.exports = Pokemon;