export function generateID() {
  return Math.random()
    .toString(36)
    .substring(2);
}
