function nameFormatting(name: string) {
  return name.substring(name.lastIndexOf('/') + 1, name.length);
}
export function arrayOfNamesFormatting(array: Array<string | undefined>) {
  return array.map((item) => (item ? nameFormatting(item) : undefined));
}
