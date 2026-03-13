export function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function pickRandom<T>(array: T[], count: number): T[] {
  return shuffle(array).slice(0, count);
}

export function pickRandomExcluding<T extends { id: string }>(
  array: T[],
  exclude: T,
  count: number
): T[] {
  return pickRandom(array.filter(item => item.id !== exclude.id), count);
}
