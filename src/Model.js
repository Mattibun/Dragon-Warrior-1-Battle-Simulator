const initModel = {
  battleText: [],
  currentEnemy: 'slime',
  inBattle: false,
  player: {
    name: 'Rollo',
    nameSum: 0,
    progression: 0,
    level: 1,
    strength: 4,
    agility: 4,
    hp: 15,
    mp: 0,
  },
  enemy: {
    'slime': {
      name: 'slime',
      strength: 5,
      agility: 3,
      hp: 3,
    },
    'red slime': {
      name: 'red slime',
      strength: 7,
      agility: 3,
      hp: 3,
    },
    'drakee': {
      name: 'drakee',
      strength: 9,
      agility: 6,
      hp: [5, 6],
    },
    'ghost': {
      name: 'ghost',
      strength: 11,
      agility: 8,
      hp: [6, 7],
    },
    'magician': {
      name: 'magician',
      strength: 11,
      agility: 12,
      hp: [10, 13],
    },
    'magidrakee': {
      name: 'magidrakee',
      strength: 14,
      agility: 14,
      hp: [12, 15],
    },
    'scorpion': { // Incomplete
      name: 'scorpion',
      strength: 18,
      agility: 16,
      hp: [16, 20],
    },
  },
  levels: {
    1: [4, 4, 15, 0],
    2: [5, 4, 22, 0],
    3: [7, 6, 24, 5],
    4: [7, 8, 31, 16],
    5: [12, 10, 35, 20],
    6: [16, 10, 38, 24],
    7: [18, 17, 40, 26],
    8: [22, 20, 46, 29],
    9: [30, 22, 50, 36],
    10: [35, 31, 54, 40],
    20: [92, 88, 138, 128],
  },
};

export default initModel;