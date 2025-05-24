export const COLORS = [
  "text-pink-400",
  "text-purple-400",
  "text-sky-300",
  "text-yellow-300",
  "text-emerald-300",
];

export function getRandomizedColors() {
  return [...COLORS].sort(() => 0.5 - Math.random());
}
