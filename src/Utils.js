import * as R from "ramda";

export const coinFlip = R.ifElse(
  // Returns true/false like tossing a coin
  R.equals(Math.floor(Math.random() * 2)),
  R.always(false),
  R.always(true)
);

// Capitalizes first character in string
export const capitalize = x => x.charAt(0).toUpperCase() + x.slice(1);

export const randomFromRange = arr => {
  const [min, max] = arr;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const heal = (entity, range) => {
  const healMax = entity.maxhp - entity.hp;
  const healAmt = randomFromRange(range);
  return healMax < healAmt ? healMax : healAmt;
};
