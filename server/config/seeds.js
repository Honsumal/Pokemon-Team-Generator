const db = require('./connection');
const mongoose = require('mongoose');
const { Pokemon, Team } = require('../models');
const {Schema} = require('mongoose');

db.once('open', async () => {
  await Pokemon.deleteMany();

  const pokemon = await Pokemon.insertMany([
    {
      name: 'ogerpon-wellspring',
      nickname: 'Ayumu',
      ability: 'water-absorb',
      move1: 'ivy-cudgel',
      move2: 'horn-leech',
      move3: 'spiky-shield',
      move4: 'follow-me',
      item: 'wellspring-mask',
      nature: 'adamant',
      hpEV: 228,
      atkEV: 76,
      defEV: 4,
      spaEV: 0,
      spdefEV: 12,
      spdEV: 118,
      tera: 'water'
    },
    {
      name: 'tornadus',
      nickname: 'Kamikaze',
      ability: 'prankster',
      move1: 'bleakwind-storm',
      move2: 'tailwind',
      move3: 'taunt',
      move4: 'rain-dance',
      item: 'covert-cloak',
      nature: 'adamant',
      hpEV: 252,
      atkEV: 0,
      defEV: 92,
      spaEV: 4,
      spdefEV: 132,
      spdEV: 28,
      tera: 'dark'
    },
    {
      name: 'archaludon',
      nickname: 'Tower',
      ability: 'stamina',
      move1: 'draco-meteor',
      move2: 'flash-cannon',
      move3: 'electro-shot',
      move4: 'body-press',
      item: 'assault-vest',
      nature: 'modest',
      hpEV: 252,
      atkEV: 0,
      defEV: 28,
      spaEV: 36,
      spdefEV: 164,
      spdEV: 28,
      tera: 'grass'
    },
    {
      name: 'landorus',
      nickname: 'Shinchi',
      ability: 'Intimidate',
      move1: 'stomping-tantrum',
      move2: 'tera-blast',
      move3: 'rock-slide',
      move4: 'u-turn',
      item: 'choice-scarf',
      nature: 'jolly',
      hpEV: 4,
      atkEV: 252,
      defEV: 44,
      spaEV: 0,
      spdefEV: 4,
      spdEV: 204,
      tera: 'flying'
    },
    {
      name: 'iron-hands',
      nickname: 'Hakuho',
      ability: 'quark-drive',
      move1: 'fake-out',
      move2: 'drain-punch',
      move3: 'wild-charge',
      move4: 'volt-switch',
      item: 'assault-vest',
      nature: 'adamant',
      hpEV: 4,
      atkEV: 156,
      defEV: 4,
      spaEV: 0,
      spdefEV: 252,
      spdEV: 92,
      tera: 'grass'
    },
    {
      name: 'chien-pao',
      nickname: 'Daggerfall',
      ability: 'sword-of-ruin',
      move1: 'ice-spinner',
      move2: 'sucker-punch',
      move3: 'sacred-sword',
      move4: 'protect',
      item: 'focus-sash',
      nature: 'adamant',
      hpEV: 0,
      atkEV: 252,
      defEV: 4,
      spaEV: 0,
      spdefEV: 0,
      spdEV: 252,
      tera: 'stellar'
    },
  ])

  console.log('Pokemon seeded')

  await Team.deleteMany();

  await Team.create([
    {
      nickname: 'Oger-W',
      pk1: [pokemon[0]],
      pk2: [pokemon[1]],
      pk3: [pokemon[2]],
      pk4: [pokemon[3]],
      pk5: [pokemon[4]],
      pk6: [pokemon[5]],
    }
  ]);

  console.log('Teams Seeded')

  process.exit();
});
