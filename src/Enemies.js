const ATTACKS = {
  ATTACK: "ATTACK",
  HURT: "HURT",
  HURTMORE: "HURTMORE",
  HEAL: "HEAL",
  HEALMORE: "HEALMORE",
  SLEEP: "SLEEP",
  STOPSPELL: "STOPSPELL",
  FIRE: "FIRE",
  STRONGFIRE: "STRONGFIRE"
};

const ENEMIES = {
  Slime: {
    name: "Slime",
    strength: 5,
    agility: 3,
    hp: 3,
    sleepR: 0,
    stopR: 15,
    hurtR: 0,
    dodge: 1,
    pattern: [{ id: ATTACKS.ATTACK, weight: 100 }],
    run: 0
  },
  "Red Slime": {
    name: "Red Slime",
    strength: 7,
    agility: 3,
    hp: 3,
    sleepR: 0,
    stopR: 15,
    hurtR: 0,
    dodge: 1,
    pattern: [{ id: ATTACKS.ATTACK, weight: 100 }],
    run: 0
  },
  Drakee: {
    name: "Drakee",
    strength: 9,
    agility: 6,
    hp: [5, 6],
    sleepR: 0,
    stopR: 15,
    hurtR: 0,
    dodge: 1,
    pattern: [{ id: ATTACKS.ATTACK, weight: 100 }],
    run: 0
  },
  Ghost: {
    name: "Ghost",
    strength: 11,
    agility: 8,
    hp: [6, 7],
    sleepR: 0,
    stopR: 15,
    hurtR: 0,
    dodge: 4,
    pattern: [{ id: ATTACKS.ATTACK, weight: 100 }],
    run: 0
  },
  Magician: {
    name: "Magician",
    strength: 11,
    agility: 12,
    hp: [10, 13],
    sleepR: 0,
    stopR: 0,
    hurtR: 0,
    dodge: 1,
    pattern: [
      { id: ATTACKS.ATTACK, weight: 50 },
      { id: ATTACKS.HURT, weight: 50 }
    ],
    run: 0
  },
  Magidrakee: {
    name: "Magidrakee",
    strength: 14,
    agility: 14,
    hp: [12, 15],
    sleepR: 0,
    stopR: 0,
    hurtR: 0,
    dodge: 1,
    pattern: [
      { id: ATTACKS.ATTACK, weight: 50 },
      { id: ATTACKS.HURT, weight: 50 }
    ],
    run: 0
  },
  Scorpion: {
    // Incomplete
    name: "Scorpion",
    strength: 18,
    agility: 16,
    hp: [16, 20],
    sleepR: 0,
    stopR: 15,
    hurtR: 0,
    dodge: 1,
    pattern: [{ id: ATTACKS.ATTACK, weight: 100 }],
    run: 0
  },
  Druin: {
    name: "Druin",
    strength: 20,
    agility: 18,
    hp: [17, 22],
    sleepR: 0,
    stopR: 15,
    hurtR: 0,
    dodge: 2,
    pattern: [{ id: ATTACKS.ATTACK, weight: 100 }],
    run: 0
  },
  Poltergeist: {
    name: "Poltergeist",
    strength: 18,
    agility: 20,
    hp: [18, 23],
    sleepR: 0,
    stopR: 0,
    hurtR: 0,
    dodge: 6,
    pattern: [
      { id: ATTACKS.ATTACK, weight: 25 },
      { id: ATTACKS.HURT, weight: 75 }
    ],
    run: 0
  },
  Droll: {
    name: "Droll",
    strength: 24,
    agility: 24,
    hp: [19, 25],
    sleepR: 0,
    stopR: 14,
    hurtR: 0,
    dodge: 2,
    pattern: [{ id: ATTACKS.ATTACK, weight: 100 }],
    run: 0
  },
  Drakeema: {
    name: "Drakeema",
    strength: 22,
    agility: 26,
    hp: [16, 20],
    sleepR: 2,
    stopR: 0,
    hurtR: 0,
    dodge: 6,
    pattern: [
      { id: ATTACKS.HEAL, weight: 25 },
      { id: ATTACKS.HURT, weight: 50 },
      { id: ATTACKS.ATTACK, weight: 25 }
    ],
    run: 0
  },
  Skeleton: {
    name: "Skeleton",
    strength: 28,
    agility: 22,
    hp: [16, 20],
    sleepR: 0,
    stopR: 15,
    hurtR: 0,
    dodge: 4,
    pattern: [{ id: ATTACKS.ATTACK, weight: 100 }],
    run: 0
  },
  Warlock: {
    name: "Warlock",
    strength: 28,
    agility: 22,
    hp: [23, 30],
    sleepR: 3,
    stopR: 1,
    hurtR: 0,
    dodge: 2,
    pattern: [
      { id: ATTACKS.SLEEP, weight: 25 },
      { id: ATTACKS.HURT, weight: 50 },
      { id: ATTACKS.ATTACK, weight: 50 }
    ],
    run: 0
  },
  "Metal Scorpion": {
    name: "Metal Scorpion",
    strength: 36,
    agility: 42,
    hp: [17, 22],
    sleepR: 0,
    stopR: 15,
    hurtR: 0,
    dodge: 2,
    pattern: [{ id: ATTACKS.ATTACK, weight: 100 }],
    run: 0
  },
  Wolf: {
    name: "Wolf",
    strength: 40,
    agility: 30,
    hp: [26, 34],
    sleepR: 1,
    stopR: 15,
    hurtR: 0,
    dodge: 2,
    pattern: [{ id: ATTACKS.ATTACK, weight: 100 }],
    run: 0
  },
  Wraith: {
    name: "Wraith",
    strength: 44,
    agility: 34,
    hp: [26, 34],
    sleepR: 7,
    stopR: 0,
    hurtR: 0,
    dodge: 4,
    pattern: [
      { id: ATTACKS.HEAL, weight: 25 },
      { id: ATTACKS.ATTACK, weight: 75 }
    ],
    run: 0
  },
  "Metal Slime": {
    name: "Metal Slime",
    strength: 10,
    agility: 255,
    hp: 4,
    sleepR: 15,
    stopR: 15,
    hurtR: 15,
    dodge: 1,
    pattern: [
      { id: ATTACKS.HURT, weight: 75 },
      { id: ATTACKS.ATTACK, weight: 25 }
    ],
    run: 0
  },
  Specter: {
    name: "Specter",
    strength: 40,
    agility: 38,
    hp: [28, 36],
    sleepR: 3,
    stopR: 1,
    hurtR: 0,
    dodge: 4,
    pattern: [
      { id: ATTACKS.SLEEP, weight: 25 },
      { id: ATTACKS.HURT, weight: 75 },
      { id: ATTACKS.ATTACK, weight: 25 }
    ],
    run: 0
  },
  Wolflord: {
    name: "Wolflord",
    strength: 50,
    agility: 36,
    hp: [29, 38],
    sleepR: 4,
    stopR: 7,
    hurtR: 0,
    dodge: 2,
    pattern: [
      { id: ATTACKS.STOPSPELL, weight: 50 },
      { id: ATTACKS.ATTACK, weight: 50 }
    ],
    run: 0
  },
  Druinlord: {
    name: "Druinlord",
    strength: 47,
    agility: 40,
    hp: [27, 35],
    sleepR: 15,
    stopR: 0,
    hurtR: 0,
    dodge: 4,
    pattern: [
      { id: ATTACKS.HEAL, weight: 75 },
      { id: ATTACKS.ATTACK, weight: 75 },
      { id: ATTACKS.HURT, weight: 25 }
    ],
    run: 0
  },
  Drollmagi: {
    name: "Drollmagi",
    strength: 52,
    agility: 50,
    hp: [29, 38],
    sleepR: 2,
    stopR: 2,
    hurtR: 0,
    dodge: 1,
    pattern: [
      { id: ATTACKS.STOPSPELL, weight: 50 },
      { id: ATTACKS.ATTACK, weight: 50 }
    ],
    run: 1
  },
  Wyvern: {
    name: "Wyvern",
    strength: 56,
    agility: 48,
    hp: [32, 42],
    sleepR: 4,
    stopR: 15,
    hurtR: 0,
    dodge: 2,
    pattern: [{ id: ATTACKS.ATTACK, weight: 100 }],
    run: 1
  },
  "Rogue Scorpion": {
    name: "Rogue Scorpion",
    strength: 60,
    agility: 90,
    hp: [27, 35],
    sleepR: 7,
    stopR: 15,
    hurtR: 0,
    dodge: 2,
    pattern: [{ id: ATTACKS.ATTACK, weight: 100 }],
    run: 1
  },
  "Wraith Knight": {
    name: "Wraith Knight",
    strength: 68,
    agility: 56,
    hp: [35, 46],
    sleepR: 5,
    stopR: 0,
    hurtR: 3,
    dodge: 4,
    pattern: [
      { id: ATTACKS.HEAL, weight: 75 },
      { id: ATTACKS.ATTACK, weight: 25 }
    ],
    run: 1
  },
  Golem: {
    name: "Golem",
    strength: 120,
    agility: 60,
    hp: [53, 70],
    sleepR: 15,
    stopR: 15,
    hurtR: 15,
    dodge: 0,
    pattern: [{ id: ATTACKS.ATTACK, weight: 100 }],
    run: 1
  },
  Goldman: {
    name: "Goldman",
    strength: 48,
    agility: 40,
    hp: [38, 50],
    sleepR: 13,
    stopR: 15,
    hurtR: 0,
    dodge: 1,
    pattern: [{ id: ATTACKS.ATTACK, weight: 100 }],
    run: 1
  },
  Knight: {
    name: "Knight",
    strength: 76,
    agility: 78,
    hp: [42, 55],
    sleepR: 6,
    stopR: 7,
    hurtR: 0,
    dodge: 1,
    pattern: [
      { id: ATTACKS.STOPSPELL, weight: 50 },
      { id: ATTACKS.ATTACK, weight: 50 }
    ],
    run: 1
  },
  Magiwyvern: {
    name: "Magiwyvern",
    strength: 78,
    agility: 68,
    hp: [44, 58],
    sleepR: 0,
    stopR: 15,
    hurtR: 0,
    dodge: 0,
    pattern: [
      { id: ATTACKS.SLEEP, weight: 50 },
      { id: ATTACKS.ATTACK, weight: 50 }
    ],
    run: 1
  },
  "Demon Knight": {
    name: "Demon Knight",
    strength: 79,
    agility: 64,
    hp: [38, 50],
    sleepR: 15,
    stopR: 15,
    hurtR: 15,
    dodge: 15,
    pattern: [{ id: ATTACKS.ATTACK, weight: 100 }],
    run: 1
  },
  Werewolf: {
    name: "Werewolf",
    strength: 86,
    agility: 70,
    hp: [46, 60],
    sleepR: 7,
    stopR: 15,
    hurtR: 0,
    dodge: 7,
    pattern: [{ id: ATTACKS.ATTACK, weight: 100 }],
    run: 1
  },
  "Green Dragon": {
    name: "Green Dragon",
    strength: 88,
    agility: 74,
    hp: [49, 65],
    sleepR: 7,
    stopR: 15,
    hurtR: 2,
    dodge: 2,
    pattern: [
      { id: ATTACKS.FIRE, weight: 25 },
      { id: ATTACKS.ATTACK, weight: 75 }
    ],
    run: 2
  },
  Starwyvern: {
    name: "Starwyvern",
    strength: 86,
    agility: 80,
    hp: [49, 65],
    sleepR: 8,
    stopR: 0,
    hurtR: 1,
    dodge: 2,
    pattern: [
      { id: ATTACKS.HEALMORE, weight: 75 },
      { id: ATTACKS.FIRE, weight: 25 },
      { id: ATTACKS.ATTACK, weight: 75 }
    ],
    run: 2
  },
  Wizard: {
    name: "Wizard",
    strength: 80,
    agility: 70,
    hp: [49, 65],
    sleepR: 17,
    stopR: 7,
    hurtR: 15,
    dodge: 2,
    pattern: [
      { id: ATTACKS.ATTACK, weight: 50 },
      { id: ATTACKS.HURTMORE, weight: 50 }
    ],
    run: 2
  },
  "Axe Knight": {
    name: "Axe Knight",
    strength: 94,
    agility: 82,
    hp: [53, 70],
    sleepR: 15,
    stopR: 3,
    hurtR: 1,
    dodge: 1,
    pattern: [
      { id: ATTACKS.SLEEP, weight: 25 },
      { id: ATTACKS.ATTACK, weight: 75 }
    ],
    run: 2
  },
  "Blue Dragon": {
    name: "Blue Dragon",
    strength: 98,
    agility: 84,
    hp: [53, 70],
    sleepR: 15,
    stopR: 15,
    hurtR: 7,
    dodge: 2,
    pattern: [
      { id: ATTACKS.FIRE, weight: 25 },
      { id: ATTACKS.ATTACK, weight: 75 }
    ],
    run: 2
  },
  Stoneman: {
    name: "Stoneman",
    strength: 100,
    agility: 40,
    hp: [121, 160],
    sleepR: 2,
    stopR: 15,
    hurtR: 7,
    dodge: 1,
    pattern: [{ id: ATTACKS.ATTACK, weight: 100 }],
    run: 3
  },
  "Armored Knight": {
    name: "Armored Knight",
    strength: 105,
    agility: 86,
    hp: [68, 90],
    sleepR: 15,
    stopR: 7,
    hurtR: 1,
    dodge: 2,
    pattern: [
      { id: ATTACKS.HEALMORE, weight: 75 },
      { id: ATTACKS.HURTMORE, weight: 25 },
      { id: ATTACKS.ATTACK, weight: 75 }
    ],
    run: 3
  },
  "Red Dragon": {
    name: "Red Dragon",
    strength: 120,
    agility: 90,
    hp: [76, 100],
    sleepR: 15,
    stopR: 7,
    hurtR: 15,
    dodge: 2,
    pattern: [
      { id: ATTACKS.SLEEP, weight: 25 },
      { id: ATTACKS.FIRE, weight: 25 },
      { id: ATTACKS.ATTACK, weight: 50 }
    ],
    run: 3
  },
  "Dragonlord (first form)": {
    name: "Dragonlord (first form)",
    strength: 90,
    agility: 75,
    hp: [76, 100],
    sleepR: 15,
    stopR: 15,
    hurtR: 15,
    dodge: 0,
    pattern: [
      { id: ATTACKS.STOPSPELL, weight: 25 },
      { id: ATTACKS.HURTMORE, weight: 75 },
      { id: ATTACKS.ATTACK, weight: 25 }
    ],
    voidCrit: true,
    run: 3
  },
  "Dragonlord (second form)": {
    name: "Dragonlord (second form)",
    strength: 140,
    agility: 200,
    hp: 130,
    sleepR: 15,
    stopR: 15,
    hurtR: 15,
    dodge: 0,
    pattern: [
      { id: ATTACKS.STRONGFIRE, weight: 50 },
      { id: ATTACKS.ATTACK, weight: 50 }
    ],
    voidCrit: true,
    run: 3
  }
};

/**
 * [changeEnemy description]
 * @param  {[type]} msg [description]
 * @return {[type]}     [description]
 */
export default function changeEnemy(msg) {
  const newEnemy = ENEMIES[msg.enemy];
  return newEnemy;
}
