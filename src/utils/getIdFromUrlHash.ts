export function getIdFromUrlHash(hash: string) {
  return decodeURI(hash)
    .replaceAll("#", "")
    .replaceAll("/", "")
    .replaceAll("?", "")
    .replaceAll("!", "")
    .replaceAll("%", "")
    .replaceAll("&", "")
    .replaceAll("*", "")
    .replaceAll("@", "")
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replaceAll("[", "")
    .replaceAll("]", "")
    .replaceAll("{", "")
    .replaceAll("}", "")
    .replaceAll(/[\W_]+/g, "-")
    .toLowerCase();
}
